import { describe, expect, it } from 'vitest'
import { FormatPhone } from './FormatPhone'

describe('Format Phone', () => {
	it('format if phone is valid', () => {
		expect(FormatPhone.format('(00) 90000-0000')).toEqual('00900000000')
	})

	it('not format if char limit over', () => {
		expect(() => FormatPhone.format('(00) 900000-0000')).toThrow()
	})

	it('not format if phone is invalid', () => {
		expect(() => FormatPhone.format('(00) 00000-0000')).toThrow()
	})
})
