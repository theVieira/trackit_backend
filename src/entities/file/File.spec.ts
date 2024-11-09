import { faker } from '@faker-js/faker'
import { describe, expect, it } from 'vitest'
import { File } from './File'
import { mockedTech } from '../../mock/MockTech'

describe('File', () => {
	const file: File = File.create({
		filename: faker.person.lastName(),
		size: String(faker.number.float()),
		updated: { tech: mockedTech },
		url: faker.internet.url(),
	})

	it('create file', () => {
		expect(file).toBeInstanceOf(File)
		expect(file.id).toBeDefined()
	})
})
