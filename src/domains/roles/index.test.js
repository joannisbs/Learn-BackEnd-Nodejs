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


describe('update', () => {

  let createRolesInstance = {}
  let rolesMockInstance = {}

  beforeEach( async () => {

    let { createRoles, rolesMock } = await createRole()
    createRolesInstance = createRoles
    rolesMockInstance = rolesMock
  })

  test('should update a name of role', async () => {
   
    const name = { name: 'vitor' }
    
    const updateRoles = await rolesDomain.updateById(name, { rolesId: createRolesInstance.id })

    expect('vitor').toEqual(updateRoles.name)
    
  })

  test('should update a description role', async () => {
   
    const Description = { description: 'descricaolazarenta' }
    
    const updateRoles = await rolesDomain.updateById(Description, { rolesId: createRolesInstance.id })

    expect('descricaolazarenta').toEqual(updateRoles.description)
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
   
    const rolesReturned = await rolesDomain.getAll({ offset: 1, limit: 5, orderBy: 'name' })

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

