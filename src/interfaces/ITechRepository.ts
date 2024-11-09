import { Tech } from '../../entities/tech/Tech'

export interface ITechRepository {
	create(tech: Tech): Promise<void>
	findByEmail(email: string): Promise<Tech | undefined>
}
