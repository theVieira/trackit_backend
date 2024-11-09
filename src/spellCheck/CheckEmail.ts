import { CharLimitOver } from '../errors/CharLimitOver'
import { Invalid } from '../errors/Invalid'

export class CheckEmail {
	static check(email: string): true {
		if (email.length > 60) throw new CharLimitOver('email', 60)

		const regExp: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g

		const test: boolean = regExp.test(email)

		if (!test) throw new Invalid('email')

		return true
	}
}
