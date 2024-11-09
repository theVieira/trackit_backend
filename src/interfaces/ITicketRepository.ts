import { Ticket } from './../../entities/ticket/Ticket'
export interface ITicketRepository {
	create(ticket: Ticket): Promise<void>
}
