export type ClientProps = {
	readonly id: string
	name: string
	CNPJ: string
	phone: string
	email: string
}

export type CreateClientProps = Omit<ClientProps, 'id'>
