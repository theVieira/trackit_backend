import { TechKeys } from './../../../keys/TechKeys'
import { Tech } from '../../../entities/tech/Tech'
import { CreateTechProps } from '../../../entities/tech/TechProps'
import { ICacheRepository } from './../../../repositories/interfaces/ICacheRepository'
import { ITechRepository } from './../../../repositories/interfaces/ITechRepository'
export class CreateTechUsecase {
	private constructor(
		private techRepository: ITechRepository,
		private cacheRepository: ICacheRepository
	) {}

	static create(
		techRepository: ITechRepository,
		cacheRepository: ICacheRepository
	): CreateTechUsecase {
		return new CreateTechUsecase(techRepository, cacheRepository)
	}

	async execute({
		email,
		name,
		password,
		permission,
		phone,
	}: CreateTechProps): Promise<void> {
		const findByEmail: Tech | undefined = await this.techRepository.findByEmail(
			email
		)

		if (findByEmail) throw new Error('email is already in use')

		const tech: Tech = Tech.create({ email, name, password, permission, phone })

		await this.techRepository.create(tech)

		await this.cacheRepository.clear(TechKeys.ALL)

		return
	}
}
