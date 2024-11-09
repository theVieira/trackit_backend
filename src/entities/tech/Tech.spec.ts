import { describe, expect, it } from 'vitest'
import { Tech } from './Tech'
import { TechStatus } from './TechProps'
import { mockedTech } from '../../mock/MockTech'
import { mockedPermission } from '../../mock/MockPermission'

describe('Tech', () => {
	it('create tech', () => {
		expect(mockedTech).toBeInstanceOf(Tech)
	})

	it('setters tech', () => {
		mockedTech.email = 'ipsum@lorem.com'
		mockedTech.name = 'ipsum'
		mockedTech.phone = '(11) 91111-1111'
		mockedTech.status = TechStatus.inactive
		mockedTech.permission = mockedPermission

		expect(mockedTech.name).toEqual('Ipsum')
	})
})
