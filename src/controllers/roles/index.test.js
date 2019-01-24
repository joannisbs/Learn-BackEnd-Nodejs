const faker = require('faker')
const request = require('../../helpers/request')

describe('/roles add', () =>{
  
  test('should add a new roles', async () => {
    const rolerMock = {
      name: faker.name.findName(), 
      description: faker.lorem.text(),
  }
    
    const response = await request().post('/api/role', rolerMock)

    expect(response.statusCode).toBe(200)
    expect(response.body.name).toEqual(rolerMock.name)
    expect(response.body.description).toEqual(rolerMock.description)
    expect(response.body.id).toBeTruthy()

  })
})
 
describe('/user get', () => {
  let roleCreated = null
  let rolerMock = null

  beforeEach(  criaMock = async ()=> {
    rolerMock = {
      name: faker.name.findName(), 
      description: faker.lorem.text(),
    }
    roleCreated = (await request().post('/api/role',rolerMock)).body
  })

  test('should return all roles', async () =>{
    const response = await request().get('/api/role')
    expect(response.statusCode).toBe(200)
    expect(response.body.length > 0).toBeTruthy()
  })

  // test('should return user by Id', async () =>{
  //   const response = await request().get(`/api/user/${roleCreated.id}`)
  //   expect(response.statusCode).toBe(200)
  //   expect(response.body.name).toEqual(roleCreated.name)
  //   expect(response.body.id).toEqual(roleCreated.id)
  // })

  // test('should update user by Id', async () =>{
  //   const idUserToUpdate = roleCreated.id
  //   criaMock()
  //   const response = await request().put(`/api/user/${idUserToUpdate}`,rolerMock)
    
  //   expect(response.statusCode).toBe(200)
  //   expect(response.body.name).toEqual(rolerMock.name)
  //   expect(response.body.id).toEqual(idUserToUpdate)
  // })

})