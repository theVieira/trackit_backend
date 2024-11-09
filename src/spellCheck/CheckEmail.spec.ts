import { describe, it, expect } from 'vitest'
import { CheckEmail } from './CheckEmail'

describe('Check Email', () => {
	it('valid email must return true', (t) => {
		const check = CheckEmail.check('lorem@ipsum.com.br')

		expect(check).toEqual(true)
	})

	it('invalid email must return error', (t) => {
		expect(() => CheckEmail.check('lorem.com.br')).toThrow()
	})
})
