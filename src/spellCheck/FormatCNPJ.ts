import { CharLimitOver } from '../errors/CharLimitOver'
import { Invalid } from '../errors/Invalid'

export class FormatCNPJ {
	static format(CNPJ: string): string {
		if (CNPJ.length > 18) throw new CharLimitOver('CNPJ', 18)

		const regExp: RegExp = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/

		const test: boolean = regExp.test(CNPJ)

		if (!test) throw new Invalid('CNPJ')

		return CNPJ.replace(/\D/g, '')
	}
}
