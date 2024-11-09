import { describe, expect, it } from 'vitest'
import { Ticket } from './Ticket'
import { mockedTicket } from '../../mock/MockTicket'

describe('Ticket', () => {
	it('create ticket', () => {
		expect(mockedTicket).toBeInstanceOf(Ticket)
	})
})
