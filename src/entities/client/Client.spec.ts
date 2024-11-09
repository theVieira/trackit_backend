import { describe, expect, it } from 'vitest'
import { Client } from './Client'
import { mockedClient } from '../../mock/MockClient'

describe('Client', () => {
	it('create client', () => {
		expect(mockedClient).toBeInstanceOf(Client)
		expect(mockedClient.name).toBeDefined()
		expect(mockedClient.id).toBeDefined()
	})

	it('setters client', () => {
		mockedClient.name = 'ipsum'
		mockedClient.phone = '(11) 91111-1111'
		mockedClient.email = 'ipsum@lorem.com'

		expect(mockedClient.name).toEqual('Ipsum')
		expect(mockedClient.phone).toEqual('11911111111')
		expect(mockedClient.email).toEqual('ipsum@lorem.com')
	})
})
