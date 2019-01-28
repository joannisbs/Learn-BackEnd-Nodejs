const R = require('ramda')
const faker = require('faker')

const RolesDomain = require('../roles')
const rolesDomain = new RolesDomain()

const UserDomain = require('../user')
const userDomain = new UserDomain()

const UserRoleDomain = require('./')
const userRoleDomain = new UserRoleDomain()

describe('add User Roles', () => {

  let userRoleMock = {}
 
  beforeEach( async () => {
    userRoleMock = { userId: await addUserMock(), roleId:await createRole() }
  })

  test('should add a new userRole link', async () => {
    const userRoleInstance = await userRoleDomain.add(userRoleMock)
    expect(userRoleMock).toEqual(R.omit(['deletedAt','createdAt','id','updatedAt'],userRoleInstance))
  })
})

describe('get', () => {
  let userRoleInstance = {}
  let userRoleMock = {}
 
  beforeEach( async () => {
    userRoleMock = {userId: await addUserMock(), roleId:await createRole()}
    userRoleInstance = await userRoleDomain.add(userRoleMock)
  })

  test('should get a roleLink by id', async () => {
    const userRolesReturned = await userRoleDomain.getById(userRoleInstance.id)
    expect(userRolesReturned).toEqual(userRoleInstance)
  })

  test('should get all roleLink by userid', async () => {
    const userRolesReturned = await userRoleDomain.getByUserId(userRoleMock.userId, { offset: 1, limit: 5, orderBy: 'name' })
    expect(userRolesReturned.length > 0).toBeTruthy()
  })

  test('should get all roleLink by roleId', async () => {
    const userRolesReturned = await userRoleDomain.getByRoleId(userRoleMock.roleId, { offset: 1, limit: 5, orderBy: 'name' })
    expect(userRolesReturned.length > 0).toBeTruthy()
  })

  test('should get all roleLink', async () => {
    const userRolesReturned = await userRoleDomain.getAll({ offset: 1, limit: 5, orderBy: 'name' })
    expect(userRolesReturned.length > 0).toBeTruthy()
  })

  test('should delete roleLink', async () => {
    const userRolesReturned = await userRoleDomain.delete(userRoleInstance.id)
    expect(userRolesReturned).toBeTruthy()
  })

})
  

async function createRole() {
  const rolesMock = { 
    name: faker.name.findName(), 
    description: 'algumaRoleVagabunda'
  }
  const createRoles = await rolesDomain.add(rolesMock)
  return createRoles.id
}

function createMock(hide) {
  const userMock = { 
    name: faker.name.findName(), 
    password: faker.internet.password(),
    username: faker.name.firstName()
  }
  return R.omit(hide,userMock)
}

async function addUserMock() {
  let userMock = createMock(['']) 
  const createUser = await userDomain.add(userMock)
  return createUser.id
}

