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

describe('get', () => {
  let createRolesInstance = {}
  let rolesMockInstance = {}

  beforeEach( async () => {

    let { createRoles, rolesMock } = await createRole()
    createRolesInstance = createRoles
    rolesMockInstance = rolesMock
  })
    
  test('should get a user by id', async () => {
   
    const rolesReturned = await rolesDomain.getById(createRolesInstance.id)

    expect(rolesReturned).toEqual(createRolesInstance)
    
  })
  test('should get all roles', async () => {
   
    const rolesReturned = await rolesDomain.getAll()

    expect(rolesReturned.length > 0).toBeTruthy()
    
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

