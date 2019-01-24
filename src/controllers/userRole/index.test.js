const faker = require('faker')
const request = require('../../helpers/request')


describe('/roleUser add link', () =>{
  let roleId = null
  let userId = null

  beforeEach(  criaLinkMock = async () => {
    
    const userMock = {
      name: faker.name.findName(), 
      password: faker.internet.password(),
      username: faker.name.firstName()
    }
    const rolerMock = {
      name: faker.name.findName(), 
      description: faker.lorem.sentence(5),
    }
    
    userId = (await request().post('/api/user', userMock)).body.id
    roleId = (await request().post('/api/role', rolerMock)).body.id
  })

  
  test('should add a new UserRoleLink', async () => {
   
    const response = await request().post('/api/link-user-role', { userId, roleId })
    
    expect(response.statusCode).toBe(200)
    expect(response.body.userId).toEqual(userId)
    expect(response.body.roleId).toEqual(roleId)
    expect(response.body.id).toBeTruthy()

  })
})
 
describe('/user get', () => {
  let roleId = null
  let userId = null
  let userRoleLink = null

  beforeEach(  criaLinkMock = async () => {
    
    const userMock = {
      name: faker.name.findName(), 
      password: faker.internet.password(),
      username: faker.name.firstName()
    }
    const rolerMock = {
      name: faker.name.findName(), 
      description: faker.lorem.sentence(5),
    }
    
    userId = (await request().post('/api/user', userMock)).body.id
    roleId = (await request().post('/api/role', rolerMock)).body.id
    
    userRoleLink = await request().post('/api/link-user-role', { userId, roleId })
  })

  
  test('should return roleUserLink by userId', async () => {
    const response = await request().get(`/api/link-user-role/user/${userId}`)
    expect(response.statusCode).toBe(200)
    expect(response.body.length > 0).toBeTruthy()

  })

  test('should return roleUserLink by roleLinkId', async () => {
    const response = await request().get(`/api/link-user-role/${userRoleLink.body.id}`)
    expect(response.statusCode).toBe(200)
    expect(response.body.userId).toEqual(userId)
    expect(response.body.roleId).toEqual(roleId)
  })

  test('should return roleUserLink by roleId', async () => {
    const response = await request().get(`/api/link-user-role/role/${userRoleLink.body.roleId}`)
    expect(response.statusCode).toBe(200)
    expect(response.body.length > 0).toBeTruthy()
  })

  // test('should return user by Id', async () =>{
  //   const response = await request().get(`/api/user/${userCreated.id}`)
  //   expect(response.statusCode).toBe(200)
  //   expect(response.body.name).toEqual(userCreated.name)
  //   expect(response.body.id).toEqual(userCreated.id)
  // })

  // test('should update user by Id', async () =>{
  //   const idUserToUpdate = userCreated.id
  //   criaMock()
  //   const response = await request().put(`/api/user/${idUserToUpdate}`,userMock)
    
  //   expect(response.statusCode).toBe(200)
  //   expect(response.body.name).toEqual(userMock.name)
  //   expect(response.body.id).toEqual(idUserToUpdate)
  // })

})