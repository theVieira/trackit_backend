import { Tech } from './../entities/tech/Tech'

export type TimeAction = {
	readonly id: string
	time: Date
	tech: Tech
}

export type CreateTimeAction = Omit<TimeAction, 'id' | 'time'>
