import { JwtPayload } from 'jsonwebtoken'

export interface PayloadJwT extends JwtPayload {
	readonly id: string
}
