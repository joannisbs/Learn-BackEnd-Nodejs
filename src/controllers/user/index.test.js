const faker = require('faker')
const request = require('../../helpers/request')

describe('/user add', () =>{
  
  test('should add a new user', async () => {
    const userMock = {
      name: faker.name.findName(), 
      password: faker.internet.password(),
      username: faker.name.firstName()
    }
    
    const response = await request().post('/api/user',userMock)
    // const response = await axios.post('http://localhost:5000/api/user',userMock)
    
    expect(response.statusCode).toBe(500)
    expect(response.body.name).toEqual(userMock.name)
    expect(response.body.username).toEqual(userMock.username)
    expect(response.body.id).toBeTruthy()

  })
})
 