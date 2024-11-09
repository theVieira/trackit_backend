import { CharLimitOver } from '../errors/CharLimitOver'
import { Invalid } from '../errors/Invalid'

export class FormatPhone {
	static format(phone: string): string {
		if (phone.length > 15) throw new CharLimitOver('phone', 15)

		const regExp: RegExp = /^\(?\d{2}\)? ?(?:9\d{4}|\d{4})-?\d{4}$/

		const test: boolean = regExp.test(phone)

		if (!test) throw new Invalid('phone')

		return phone.replace(/\D/g, '')
	}
}
