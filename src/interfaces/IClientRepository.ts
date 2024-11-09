import { Client } from './../../entities/client/Client'

export interface IClientRepository {
	create(client: Client): Promise<void>
}
