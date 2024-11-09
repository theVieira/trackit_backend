export class CharLimitOver extends Error {
	constructor(identifier: string, max: number) {
		super(`${identifier} - over char limit max(${max})`)
	}
}
