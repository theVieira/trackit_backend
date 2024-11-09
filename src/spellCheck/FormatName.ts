import { CharLimitOver } from '../errors/CharLimitOver'

export class FormatName {
	static format(name: string): string {
		if (name.length > 40) throw new CharLimitOver('name', 40)

		return name
			.split(' ')
			.map((el) => el.charAt(0).toUpperCase() + el.substring(1))
			.join(' ')
	}
}
