import { faker } from '@faker-js/faker'
import { Permission } from '../entities/permissions/Permission'

const mockedPermission: Permission = Permission.create({
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
})

export { mockedPermission }
