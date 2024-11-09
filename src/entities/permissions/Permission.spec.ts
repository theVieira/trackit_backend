import { describe, expect, it } from 'vitest'
import { Permission } from './Permission'
import { mockedPermission } from '../../mock/MockPermission'

describe('Permission', () => {
	it('create permission', () => {
		expect(mockedPermission).toBeInstanceOf(Permission)
	})
})
