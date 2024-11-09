import { TimeAction } from '../@types/TimeAction'
import { TicketCategory, TicketPriority } from '../entities/ticket/TicketProps'
import { Client } from '../entities/client/Client'

export type TicketCreatedMessageProps = {
	id: string
	client: Client
	description: string
	open: TimeAction
	category: TicketCategory
	priority: TicketPriority
}

export function TicketCreatedMessage({
	category,
	client,
	description,
	id,
	open,
	priority,
}: TicketCreatedMessageProps): string {
	return `Novo ticket criado\n\nID:${id}\nCliente: ${client.name} - ${client.CNPJ}\nDescrição: ${description}\nCategoria: ${category}\nPrioridade: ${priority}\nAberto por: ${open.tech.name}\nAbertura: ${open.time}`
}
