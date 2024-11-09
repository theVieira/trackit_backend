import { Client } from '../../entities/client/Client'
import { IClientRepository } from './../interfaces/IClientRepository'
export class MemoryClientRepository implements IClientRepository {
	private constructor(private memory: Client[]) {}

	static create(): MemoryClientRepository {
		return new MemoryClientRepository([])
	}

	async create(client: Client): Promise<void> {
		this.memory.push(client)

		return
	}
}
