const R = require('ramda')
const faker = require('faker')
const UserDomain = require('./')
const bcrypt = require('bcrypt')

const userDomain = new UserDomain()

describe('add', () => {
  test('should add a user', async () => {
    let { createUser, userMock } = await addUserMock()

    const userToVerify = R.omit(['createdAt', 'deletedAt', 'updatedAt', 'id'], createUser )
    const isPasswordCorrect = bcrypt.compare(userMock.password, userToVerify.password)
   
    expect(isPasswordCorrect).toBeTruthy()
    expect(R.omit(['password'],userMock)).toEqual(R.omit(['password'],userToVerify))
  })
})

describe('update', () => {

  let createUserInstance = {}
  let userMockInstance = {}

  beforeEach( async () => {

    let { createUser, userMock } = await addUserMock()
    createUserInstance = createUser
    userMockInstance = userMock
  })
    
  test('should update a name user', async () => {
   
    let newUserMock = createMock(['password','id','username']) 
    
    const updateUser = await userDomain.updatebyId(newUserMock, { userId: createUserInstance.id })

    expect(newUserMock.name).toEqual(updateUser.name)
    expect(R.omit(['password','name'],userMockInstance)).toEqual(R.omit(['password','name','createdAt', 'deletedAt', 'updatedAt', 'id'],updateUser))

    const isPasswordCorrect = bcrypt.compare(userMockInstance.password, updateUser.password)
    expect(isPasswordCorrect).toBeTruthy()

    expect(updateUser.id).toEqual(createUserInstance.id)
  })

  test('should update a password user', async () => {
   
    let newUserMock = createMock(['name','id','username']) 
    
    const updateUser = await userDomain.updatebyId(newUserMock, { userId: createUserInstance.id })

    expect(R.omit(['password'],userMockInstance)).toEqual(R.omit(['password','createdAt', 'deletedAt', 'updatedAt', 'id'],updateUser))

    const isPasswordCorrect = bcrypt.compare(newUserMock.password, updateUser.password)
    expect(isPasswordCorrect).toBeTruthy()

    expect(updateUser.id).toEqual(createUserInstance.id)
  })

  test('should update a username user', async () => {
   
    let newUserMock = createMock(['password','id','name']) 
    
    const updateUser = await userDomain.updatebyId(newUserMock, { userId: createUserInstance.id })

    expect(newUserMock.username).toEqual(updateUser.username)
    expect(R.omit(['password','username'],userMockInstance)).toEqual(R.omit(['password','username','createdAt', 'deletedAt', 'updatedAt', 'id'],updateUser))

    const isPasswordCorrect = bcrypt.compare(userMockInstance.password, updateUser.password)
    expect(isPasswordCorrect).toBeTruthy()

    expect(updateUser.id).toEqual(createUserInstance.id)
  })
})

describe('get', () => {
  let createUserInstance = {}
  let userMockInstance = {}

  beforeEach( async () => {

    let { createUser, userMock } = await addUserMock()
    createUserInstance = createUser
    userMockInstance = userMock
  })
    
  test('should get a user by id', async () => {
   
    const userReturned = await userDomain.getById(createUserInstance.id)

    expect(userReturned).toEqual(createUserInstance)
    
  })
  test('should get all users', async () => {
   
    const userReturned = await userDomain.getAll({ offset: 1, limit: 5, orderBy: 'name' })

    expect(userReturned.length > 0).toBeTruthy()
    
  })
})

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
  return { createUser, userMock }
}