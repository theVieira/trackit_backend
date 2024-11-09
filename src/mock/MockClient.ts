import { faker } from '@faker-js/faker'
import { Client } from '../entities/client/Client'

const mockedClient: Client = Client.create({
	CNPJ: '00.000.000/0000-00',
	email: faker.internet.email(),
	name: faker.person.firstName(),
	phone: '(00) 90000-0000',
})

export { mockedClient }
