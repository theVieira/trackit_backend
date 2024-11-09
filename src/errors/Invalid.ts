export class Invalid extends Error {
	constructor(identifier: string) {
		super(`${identifier} is not valid`)
	}
}
