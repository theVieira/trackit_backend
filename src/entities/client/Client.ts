import { randomUUID } from 'crypto'
import { ClientProps, CreateClientProps } from './ClientProps'
import { FormatName } from '../../spellCheck/FormatName'
import { CheckEmail } from '../../spellCheck/CheckEmail'
import { FormatPhone } from '../../spellCheck/FormatPhone'
import { FormatCNPJ } from '../../spellCheck/FormatCNPJ'

export class Client {
	private constructor(private props: ClientProps) {}

	static create({ CNPJ, email, name, phone }: CreateClientProps): Client {
		const id: string = randomUUID()

		const formattedName: string = FormatName.format(name)
		const formattedPhone: string = FormatPhone.format(phone)
		const formattedCNPJ: string = FormatCNPJ.format(CNPJ)
		CheckEmail.check(email)

		return new Client({
			CNPJ: formattedCNPJ,
			email,
			id,
			name: formattedName,
			phone: formattedPhone,
		})
	}

	static restore(props: ClientProps): Client {
		return new Client(props)
	}

	get id(): string {
		return this.props.id
	}

	get name(): string {
		return this.props.name
	}

	get phone(): string {
		return this.props.phone
	}

	get email(): string {
		return this.props.email
	}

	get CNPJ(): string {
		return this.props.CNPJ
	}

	set name(name: string) {
		const formattedName: string = FormatName.format(name)

		this.props.name = formattedName
	}

	set phone(phone: string) {
		const formattedPhone: string = FormatPhone.format(phone)

		this.props.phone = formattedPhone
	}

	set email(email: string) {
		CheckEmail.check(email)

		this.props.email = email
	}
}
