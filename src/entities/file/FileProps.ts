import { CreateTimeAction, TimeAction } from '../../@types/TimeAction'

export type FileProps = {
	readonly id: string
	filename: string
	url: string
	updated: TimeAction
	size: string
}

export type CreateFileProps = Omit<FileProps, 'id' | 'updated'> & {
	updated: CreateTimeAction
}
