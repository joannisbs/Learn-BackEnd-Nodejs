const faker = require('faker')
const request = require('../../helpers/request')
const axios = require('axios');

describe('/user add', () =>{
  
  test('should add a new user', async () => {
    const userMock = {
      name: faker.name.findName(), 
      password: faker.internet.password(),
      username: faker.name.firstName()
    }
    
    const response = await request().post('/api/user', userMock)
    //const response = await axios.post('http://localhost:5000/api/user',userMock)

    expect(response.statusCode).toBe(200)
    expect(response.body.name).toEqual(userMock.name)
    expect(response.body.username).toEqual(userMock.username)
    expect(response.body.id).toBeTruthy()

  })
})
 
describe('/user get', () => {
  let userCreated = null
  let userMock = null

  beforeEach(  criaMock = async ()=> {
    userMock = {
      name: faker.name.findName(), 
      password: faker.internet.password(),
      username: faker.name.firstName()
    }
    userCreated = (await request().post('/api/user',userMock)).body
  })

  test('should return all user', async () =>{
    const response = await request().get('/api/user')
    expect(response.statusCode).toBe(200)
    expect(response.body.length > 0).toBeTruthy()
  })

  test('should return user by Id', async () =>{
    const response = await request().get(`/api/user/${userCreated.id}`)
    expect(response.statusCode).toBe(200)
    expect(response.body.name).toEqual(userCreated.name)
    expect(response.body.id).toEqual(userCreated.id)
  })

  test('should update user by Id', async () =>{
    const idUserToUpdate = userCreated.id
    criaMock()
    const response = await request().put(`/api/user/${idUserToUpdate}`,userMock)
    
    expect(response.statusCode).toBe(200)
    expect(response.body.name).toEqual(userMock.name)
    expect(response.body.id).toEqual(idUserToUpdate)
  })

})