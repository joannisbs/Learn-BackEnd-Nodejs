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
 
  beforeEach( async () => {
    let userRoleMock = { userId: await addUserMock(), roleId:await createRole() }
    userRoleInstance = await userRoleDomain.add(userRoleMock)
  })


  // test('should add a new userRole link', async () => {
    
  //   const userRoleInstance = await userRoleDomain.add(userRoleMock)

  //   expect(userRoleMock).toEqual(R.omit(['deletedAt','createdAt','id','updatedAt'],userRoleInstance))
  // })
      
  test('should get a user by id', async () => {
     
    const userRolesReturned = await userRoleDomain.getById(userRoleInstance.id)

    expect(userRolesReturned).toEqual(userRoleInstance)
    
  })
  test('should get all roles', async () => {
      
    const userRolesReturned = await userRoleDomain.getAll(userRoleInstance.id)


    expect(userRolesReturned.length > 0).toBeTruthy()
      
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



// describe('update', () => {

//   let createRolesInstance = {}
//   let rolesMockInstance = {}

//   beforeEach( async () => {

//     let { createRoles, rolesMock } = await createRole()
//     createRolesInstance = createRoles
//     rolesMockInstance = rolesMock
//   })

//   test('should update a name of role', async () => {
   
//     const name = { name: 'vitor' }
    
//     const updateRoles = await rolesDomain.updateById(name, { rolesId: createRolesInstance.id })

//     expect('vitor').toEqual(updateRoles.name)
    
//   })

//   test('should update a description role', async () => {
   
//     const Description = { description: 'descricaolazarenta' }
    
//     const updateRoles = await rolesDomain.updateById(Description, { rolesId: createRolesInstance.id })

//     expect('descricaolazarenta').toEqual(updateRoles.description)
//   })

// })


// async function createRole() {
//   const rolesMock = { 
//     name: faker.name.findName(), 
//     description: 'algumaRoleVagabunda'
//   }
//   const createRoles = await rolesDomain.add(rolesMock)
//   return { createRoles, rolesMock }
// }

//

