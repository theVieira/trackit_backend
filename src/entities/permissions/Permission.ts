import { randomUUID } from 'crypto'
import { CreatePermissionProps, PermissionProps } from './PermissionProps'

export class Permission {
	private constructor(private props: PermissionProps) {}

	static create(props: CreatePermissionProps): Permission {
		const id: string = randomUUID()

		return new Permission({ id, ...props })
	}

	static restore(props: PermissionProps): Permission {
		return new Permission(props)
	}

	get id(): string {
		return this.props.id
	}

	get admin(): boolean {
		return this.props.admin
	}

	get create_ticket(): boolean {
		return this.props.create_ticket
	}

	get edit_ticket(): boolean {
		return this.props.edit_ticket
	}

	get delete_ticket(): boolean {
		return this.props.delete_ticket
	}

	get create_client(): boolean {
		return this.props.create_client
	}

	get edit_client(): boolean {
		return this.props.edit_client
	}

	get delete_client(): boolean {
		return this.props.delete_client
	}

	get create_tech(): boolean {
		return this.props.create_tech
	}

	get edit_tech(): boolean {
		return this.props.edit_tech
	}

	get delete_tech(): boolean {
		return this.props.delete_tech
	}
}
