import { ICacheRepository } from './../../../interfaces/ICacheRepository'
import { ITechRepository } from './../../../interfaces/ITechRepository'
import { CreateTechUsecase } from './CreateTechUsecase'
import { MemoryCacheRepository } from './../../../repositories/memory/MemoryCacheRepository'
import { MemoryTechRepository } from '../../../repositories/memory/MemoryTechRepository'
import { describe, expect, it } from 'vitest'
import { mockedPermission } from '../../../mock/MockPermission'
import { faker } from '@faker-js/faker'
import { CreateTechProps } from '../../../entities/tech/TechProps'

describe('Create Tech Usecase', () => {
	it('create tech', () => {
		const mockTechRepository: ITechRepository = MemoryTechRepository.create()
		const mockCacheRepository: ICacheRepository = MemoryCacheRepository.create()
		const createTechUsecase: CreateTechUsecase = CreateTechUsecase.create(
			mockTechRepository,
			mockCacheRepository
		)

		const mockProps: CreateTechProps = {
			email: faker.internet.email(),
			name: faker.person.fullName(),
			password: faker.internet.password(),
			permission: mockedPermission,
			phone: '(00) 90000-0000',
		}

		expect(async () => createTechUsecase.execute(mockProps)).not.toThrow()
	})
})
