import { faker } from '@faker-js/faker'
import { Tech } from '../entities/tech/Tech'

const mockedTech: Tech = Tech.create({
	email: faker.internet.email(),
	name: faker.person.firstName(),
	password: faker.internet.password({ length: 6 }),
	phone: '(00) 90000-0000',
	permission: {
		admin: faker.datatype.boolean(),
		create_client: faker.datatype.boolean(),
		create_tech: faker.datatype.boolean(),
		create_ticket: faker.datatype.boolean(),
		delete_client: faker.datatype.boolean(),
		delete_tech: faker.datatype.boolean(),
		delete_ticket: faker.datatype.boolean(),
		edit_client: faker.datatype.boolean(),
		edit_tech: faker.datatype.boolean(),
		edit_ticket: faker.datatype.boolean(),
	},
})

export { mockedTech }
