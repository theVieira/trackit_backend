import { ICacheRepository } from './../interfaces/ICacheRepository'

export class MemoryCacheRepository implements ICacheRepository {
	private constructor(private memory) {}

	static create(): MemoryCacheRepository {
		return new MemoryCacheRepository({})
	}

	async clear(key: string): Promise<void> {
		delete this.memory[key]
	}

	async set<T>(key: string, value: T): Promise<void> {
		this.memory[key] = value

		return
	}

	async get<T>(key: string): Promise<T> {
		return this.memory[key]
	}
}
