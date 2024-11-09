import { File } from '../file/File'
import { TextAction } from './../../@types/TextAction'
import { CreateTimeAction, TimeAction } from './../../@types/TimeAction'
import { Client } from './../client/Client'

export type TicketProps = {
	readonly id: string
	readonly client: Client
	description: string
	category: TicketCategory
	status: TicketStatus
	priority: TicketPriority
	open: TimeAction
	progress?: TimeAction
	finish?: TimeAction
	recurrent: boolean
	notes?: TextAction[]
	reports?: TextAction[]
	attachments?: File[]
}

export type CreateTicketProps = Omit<
	TicketProps,
	| 'id'
	| 'status'
	| 'recurrent'
	| 'attachments'
	| 'report'
	| 'notes'
	| 'finish'
	| 'progress'
	| 'reports'
	| 'open'
> & {
	open: CreateTimeAction
}

export enum TicketCategory {
	daily = 'daily ',
	delivery = 'delivery ',
	budget = 'budget ',
	maintenance = 'maintenance ',
}

export enum TicketStatus {
	open = 'open',
	progress = 'progress',
	finish = 'finish',
	assistance = 'assistance',
}

export enum TicketPriority {
	low = 'low',
	normal = 'normal',
	high = 'high',
	urgent = 'urgent',
}
