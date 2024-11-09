import { Permission } from '../permissions/Permission'
import { CreatePermissionProps } from '../permissions/PermissionProps'

export type TechProps = {
	readonly id: string
	name: string
	password: string
	status: TechStatus
	phone: string
	email: string
	permission: Permission
}

export enum TechStatus {
	active = 'active',
	inactive = 'inactive',
}

export type CreateTechProps = Omit<TechProps, 'id' | 'status' | 'permission'> & {
	permission: CreatePermissionProps
}

export type ReplacePassword = {
	oldPassword: string
	newPassword: string
}
