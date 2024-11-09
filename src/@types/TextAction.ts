import { Tech } from '../entities/tech/Tech'

export type TextAction = {
	readonly id: string
	time: Date
	text: string
	tech: Tech
}

export type CreateTextAction = Omit<TextAction, 'id' | 'time'>
