import { describe, expect, it } from 'vitest'
import { FormatCNPJ } from './FormatCNPJ'

describe('Format CNPJ', () => {
	it('format if CNPJ is valid', () => {
		expect(FormatCNPJ.format('00.000.000/0000-00')).toEqual('00000000000000')
	})

	it('not format if CNPJ not valid', () => {
		expect(() => FormatCNPJ.format('0.0000.000/0000-00')).toThrow()
	})

	it('not format if CNPJ over char limit', () => {
		expect(() => FormatCNPJ.format('000.000.000/0000-00')).toThrow()
	})
})
