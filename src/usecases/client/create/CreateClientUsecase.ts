import { IClientRepository } from './../../../interfaces/IClientRepository'
import { Client } from '../../../entities/client/Client'
import { CreateClientProps } from '../../../entities/client/ClientProps'
import { ClientKeys } from '../../../keys/ClientKeys'
import { ICacheRepository } from '../../../interfaces/ICacheRepository'

export class CreateClientUsecase {
	private constructor(
		private clientRepository: IClientRepository,
		private cacheRepository: ICacheRepository
	) {}

	static create(
		clientRepository: IClientRepository,
		cacheRepository: ICacheRepository
	): CreateClientUsecase {
		return new CreateClientUsecase(clientRepository, cacheRepository)
	}

	async execute({ CNPJ, email, name, phone }: CreateClientProps): Promise<void> {
		const client: Client = Client.create({ CNPJ, email, name, phone })

		await this.clientRepository.create(client)

		await this.cacheRepository.clear(ClientKeys.ALL)

		return
	}
}
