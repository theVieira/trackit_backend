import { randomUUID } from 'crypto'
import {
	CreateTicketProps,
	TicketCategory,
	TicketPriority,
	TicketProps,
	TicketStatus,
} from './TicketProps'
import { Client } from '../client/Client'
import { CreateTimeAction, TimeAction } from '../../@types/TimeAction'
import { CreateTextAction, TextAction } from '../../@types/TextAction'
import { File } from '../file/File'
import { CharLimitOver } from '../../errors/CharLimitOver'

export class Ticket {
	private constructor(private props: TicketProps) {}

	static create({
		category,
		client,
		description,
		open,
		priority,
	}: CreateTicketProps): Ticket {
		if (description.length > 500) throw new CharLimitOver('description', 500)

		const id: string = randomUUID()
		const openId: string = randomUUID()

		return new Ticket({
			id,
			category,
			client,
			description,
			open: { id: openId, ...open, time: new Date() },
			priority,
			recurrent: false,
			status: TicketStatus.open,
		})
	}

	static restore(props: TicketProps): Ticket {
		return new Ticket(props)
	}

	get id(): string {
		return this.props.id
	}

	get client(): Client {
		return this.props.client
	}

	get category(): TicketCategory {
		return this.props.category
	}

	get description(): string {
		return this.props.description
	}

	get open(): TimeAction {
		return this.props.open
	}

	get progress(): TimeAction | undefined {
		return this.props.progress
	}

	get finish(): TimeAction | undefined {
		return this.props.finish
	}

	get priority(): TicketPriority {
		return this.props.priority
	}

	get recurrent(): boolean {
		return this.props.recurrent
	}

	get notes(): TextAction[] | undefined {
		return this.props.notes
	}

	get reports(): TextAction[] | undefined {
		return this.props.reports
	}

	get attachments(): File[] | undefined {
		return this.props.attachments
	}

	set category(category: TicketCategory) {
		this.props.category = category
	}

	set description(description: string) {
		if (description.length > 400) throw new CharLimitOver('description', 400)

		const formattedDescription: string =
			description.charAt(0).toUpperCase() + description.substring(1)

		this.props.description = formattedDescription
	}

	set progress({ tech }: CreateTimeAction) {
		const id: string = randomUUID()
		const time: Date = new Date()

		this.props.progress = { id, tech, time }
	}

	set finish({ tech }: CreateTimeAction) {
		const id: string = randomUUID()
		const time: Date = new Date()

		this.props.finish = { id, time, tech }
	}

	set priority(priority: TicketPriority) {
		this.props.priority = priority
	}

	set recurrent(_: unknown) {
		this.props.recurrent = true
	}

	set notes({ tech, text }: CreateTextAction) {
		const id: string = randomUUID()
		const time: Date = new Date()

		if (!this.props.notes) this.props.notes = []

		this.props.notes.push({ id, tech, text, time })
	}
}
