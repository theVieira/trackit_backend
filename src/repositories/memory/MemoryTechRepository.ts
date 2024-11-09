import { Tech } from '../../entities/tech/Tech'
import { ITechRepository } from '../interfaces/ITechRepository'

export class MemoryTechRepository implements ITechRepository {
	private constructor(private memory: Tech[]) {}

	static create(): MemoryTechRepository {
		return new MemoryTechRepository([])
	}

	async create(tech: Tech): Promise<void> {
		this.memory.push(tech)
	}

	async findByEmail(email: string): Promise<Tech | undefined> {
		return this.memory.filter((el) => el.email === email)[0]
	}
}
