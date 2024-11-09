export type PermissionProps = {
	readonly id: string
	admin: boolean
	create_ticket: boolean
	edit_ticket: boolean
	delete_ticket: boolean
	create_client: boolean
	edit_client: boolean
	delete_client: boolean
	create_tech: boolean
	edit_tech: boolean
	delete_tech: boolean
}

export type CreatePermissionProps = Omit<PermissionProps, 'id'>
