const R = require('ramda')
const faker = require('faker')

const RolesDomain = require('./')

const rolesDomain = new RolesDomain()

describe('addRoles', () => {
  test('should add a Role', async () => {
    let { createRoles, rolesMock } = await createRole()

    const userToVerify = R.omit(['createdAt', 'deletedAt', 'updatedAt', 'id'], createRoles )
    
    expect(rolesMock).toEqual(userToVerify)
  })
})

async function createRole() {
  const rolesMock = { 
    name: faker.name.findName(), 
    description: 'algumaRoleVagabunda'
  }
  const createRoles = await rolesDomain.add(rolesMock)
  return { createRoles, rolesMock }
}

