import { faker } from '@faker-js/faker'
import { CreateClientUsecase } from './CreateClientUsecase'
import { MemoryCacheRepository } from './../../../repositories/memory/MemoryCacheRepository'
import { MemoryClientRepository } from './../../../repositories/memory/MemoryClientRepository'
import { describe, expect, it } from 'vitest'
import { IClientRepository } from '../../../repositories/interfaces/IClientRepository'
import { ICacheRepository } from '../../../repositories/interfaces/ICacheRepository'
import { CreateClientProps } from '../../../entities/client/ClientProps'

describe('Create Client Usecase', () => {
	it('create client', () => {
		const mockClientRepository: IClientRepository = MemoryClientRepository.create()
		const mockCacheRepository: ICacheRepository = MemoryCacheRepository.create()
		const createClientUsecase: CreateClientUsecase = CreateClientUsecase.create(
			mockClientRepository,
			mockCacheRepository
		)

		const mockCreateClientProps: CreateClientProps = {
			CNPJ: '00.000.000/0000-00',
			email: faker.internet.email(),
			name: faker.person.fullName(),
			phone: '(00) 90000-0000',
		}

		expect(
			async () => await createClientUsecase.execute(mockCreateClientProps)
		).not.toThrow()
	})
})
