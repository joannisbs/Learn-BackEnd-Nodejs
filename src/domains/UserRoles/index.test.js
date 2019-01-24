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

  test('should get a roler by id', async () => {
    const userRolesReturned = await userRoleDomain.getById(userRoleInstance.id)
    expect(userRolesReturned).toEqual(userRoleInstance)
  })

  test('should get a roler by userid', async () => {
    const userRolesReturned = await userRoleDomain.getByUserId(userRoleMock.userId)
    expect(userRolesReturned.length > 0).toBeTruthy()
  })

  test('should get a roler by userid', async () => {
    const userRolesReturned = await userRoleDomain.getByRoleId(userRoleMock.roleId)
    expect(userRolesReturned.length > 0).toBeTruthy()
  })

  test('should get all roles', async () => {
    const userRolesReturned = await userRoleDomain.getAll(userRoleInstance.id)
    expect(userRolesReturned.length > 0).toBeTruthy()
  })

  test('should delete roles', async () => {
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

