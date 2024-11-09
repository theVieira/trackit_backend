import { ITicketRepository } from './../../../interfaces/ITicketRepository'
import {
	TicketCreatedMessage,
	TicketCreatedMessageProps,
} from './../../../messages/TicketCreated'
import { ITelegram } from './../../../interfaces/ITelegram'
import { TicketKeys } from './../../../keys/TicketKeys'
import { Ticket } from '../../../entities/ticket/Ticket'
import { CreateTicketProps } from '../../../entities/ticket/TicketProps'
import { ICacheRepository } from '../../../interfaces/ICacheRepository'
export class CreateTicketUsecase {
	private constructor(
		private ticketRepository: ITicketRepository,
		private cacheRepository: ICacheRepository,
		private telegramBot: ITelegram
	) {}

	static create(
		ticketRepository: ITicketRepository,
		cacheRepository: ICacheRepository,
		telegramBot: ITelegram
	): CreateTicketUsecase {
		return new CreateTicketUsecase(ticketRepository, cacheRepository, telegramBot)
	}

	async execute({
		category,
		client,
		description,
		open,
		priority,
	}: CreateTicketProps): Promise<void> {
		const ticket: Ticket = Ticket.create({
			category,
			client,
			description,
			open,
			priority,
		})

		await this.ticketRepository.create(ticket)

		await this.cacheRepository.clear(TicketKeys.ALL)

		const messageProps: TicketCreatedMessageProps = {
			category: ticket.category,
			client: ticket.client,
			description: ticket.description,
			id: ticket.id,
			open: ticket.open,
			priority: ticket.priority,
		}

		await this.telegramBot.sendMessage(TicketCreatedMessage(messageProps))

		return
	}
}
