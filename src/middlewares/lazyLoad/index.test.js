const faker = require('faker')
const request = require('../../helpers/request')

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
    const response = await request().get(`/api/user?page=2&count=7&order=CreateAt`)
    expect(response.statusCode).toBe(200)
    expect(response.body.length === 7).toBeTruthy()
  })
})