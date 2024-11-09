import { faker } from '@faker-js/faker'
import { Ticket } from '../entities/ticket/Ticket'
import { TicketCategory, TicketPriority } from '../entities/ticket/TicketProps'
import { mockedClient } from '../mock/MockClient'
import { mockedTech } from '../mock/MockTech'

const mockedTicket: Ticket = Ticket.create({
	category: TicketCategory.daily,
	client: mockedClient,
	description: faker.lorem.text(),
	open: {
		tech: mockedTech,
	},
	priority: TicketPriority.normal,
})

export { mockedTicket }
