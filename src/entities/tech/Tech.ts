import { randomUUID } from 'crypto'
import { CreateTechProps, ReplacePassword, TechProps, TechStatus } from './TechProps'
import { CheckEmail } from '../../spellCheck/CheckEmail'
import { FormatName } from '../../spellCheck/FormatName'
import { FormatPhone } from '../../spellCheck/FormatPhone'
import { compareSync, hashSync } from 'bcrypt'
import { Permission } from '../permissions/Permission'
import { CreatePermissionProps } from '../permissions/PermissionProps'

export class Tech {
	private constructor(private props: TechProps) {}

	static create({
		email,
		name,
		password,
		permission,
		phone,
	}: CreateTechProps): Tech {
		const id: string = randomUUID()

		if (password.length < 6) throw new Error('password must be min 6 char')

		CheckEmail.check(email)
		const formattedName: string = FormatName.format(name)
		const formattedPhone: string = FormatPhone.format(phone)

		const hashedPassword: string = hashSync(password, 10)

		const _permission = Permission.create(permission)

		return new Tech({
			id,
			email,
			name: formattedName,
			password: hashedPassword,
			phone: formattedPhone,
			status: TechStatus.active,
			permission: _permission,
		})
	}

	static restore(props: TechProps): Tech {
		return new Tech(props)
	}

	get id(): string {
		return this.props.id
	}

	get name(): string {
		return this.props.name
	}

	get email(): string {
		return this.props.email
	}

	get password(): string {
		return this.props.password
	}

	get phone(): string {
		return this.props.phone
	}

	get status(): TechStatus {
		return this.props.status
	}

	get permission(): Permission {
		return this.props.permission
	}

	set name(name: string) {
		const formattedName: string = FormatName.format(name)

		this.props.name = formattedName
	}

	set email(email: string) {
		CheckEmail.check(email)

		this.props.email = email
	}

	set phone(phone: string) {
		const formattedPhone: string = FormatPhone.format(phone)

		this.props.phone = formattedPhone
	}

	set status(status: TechStatus) {
		this.props.status = status
	}

	set password({ newPassword, oldPassword }: ReplacePassword) {
		const compare: boolean = compareSync(oldPassword, this.props.password)

		if (compare) {
			const hashedPassword: string = hashSync(newPassword, 10)

			this.props.password = hashedPassword

			return
		}

		throw new Error('replace password denied')
	}

	set permission(permission: CreatePermissionProps) {
		this.props.permission = Permission.restore({
			id: this.props.permission.id,
			...permission,
		})
	}
}
