import { describe, expect, it } from 'vitest'
import { FormatName } from './FormatName'

describe('Format Name', () => {
	it('format if name is valid', () => {
		expect(FormatName.format('lorem ipsum')).toEqual('Lorem Ipsum')
	})

	it('not format name if char limit over', () => {
		expect(() =>
			FormatName.format('lorem ipsum lorem ipsum lorem ipsum lorem ipsum')
		).toThrow()
	})
})
