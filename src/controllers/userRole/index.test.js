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

  test('should return all roleUserLink', async () =>{
    const response = await request().get(`/api/role`)
    expect(response.statusCode).toBe(200)
    expect(response.body.length > 0).toBeTruthy()
  })

  test('should del roleUserLink', async () =>{
    const idoflink = userRoleLink.body.id
    const respDelet = await request().delete(`/api/link-user-role/${idoflink}`)
    expect(respDelet.statusCode).toBe(200)
    const response = await request().get(`/api/link-user-role/${idoflink}`)
    expect(response.statusCode).toBe(500)
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
})