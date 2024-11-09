import { randomUUID } from 'crypto'
import { CreateFileProps, FileProps } from './FileProps'
import { TimeAction } from '../../@types/TimeAction'

export class File {
	private constructor(private props: FileProps) {}

	static create({ filename, size, updated, url }: CreateFileProps): File {
		const id: string = randomUUID()
		const updatedId: string = randomUUID()

		return new File({
			filename,
			id,
			size,
			updated: { id: updatedId, ...updated },
			url,
		})
	}

	static restore(props: FileProps): File {
		return new File(props)
	}

	get id(): string {
		return this.props.id
	}

	get filename(): string {
		return this.props.filename
	}

	get size(): string {
		return this.props.size
	}

	get updated(): TimeAction {
		return this.props.updated
	}

	get url(): string {
		return this.props.url
	}
}
