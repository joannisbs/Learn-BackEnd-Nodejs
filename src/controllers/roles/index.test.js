const faker = require('faker')
const request = require('../../helpers/request')

describe('/roler add', () =>{
  
  test('should add a new roles', async () => {
    const rolerMock = {
      name: faker.name.findName(), 
      description: faker.lorem.text(),
  }
    
    const response = await request().post('/api/roles', rolerMock)

    expect(response.statusCode).toBe(200)
    expect(response.body.name).toEqual(rolerMock.name)
    expect(response.body.description).toEqual(rolerMock.description)
    expect(response.body.id).toBeTruthy()

  })
})
 
// describe('/user get', () => {
//   let userCreated = null
//   let rolerMock = null

//   beforeEach(  criaMock = async ()=> {
//     rolerMock = {
//       name: faker.name.findName(), 
//       password: faker.internet.password(),
//       username: faker.name.firstName()
//     }
//     userCreated = (await request().post('/api/user',rolerMock)).body
//   })

//   test('should return all user', async () =>{
//     const response = await request().get('/api/user')
//     expect(response.statusCode).toBe(200)
//     expect(response.body.length > 0).toBeTruthy()
//   })

//   test('should return user by Id', async () =>{
//     const response = await request().get(`/api/user/${userCreated.id}`)
//     expect(response.statusCode).toBe(200)
//     expect(response.body.name).toEqual(userCreated.name)
//     expect(response.body.id).toEqual(userCreated.id)
//   })

//   test('should update user by Id', async () =>{
//     const idUserToUpdate = userCreated.id
//     criaMock()
//     const response = await request().put(`/api/user/${idUserToUpdate}`,rolerMock)
    
//     expect(response.statusCode).toBe(200)
//     expect(response.body.name).toEqual(rolerMock.name)
//     expect(response.body.id).toEqual(idUserToUpdate)
//   })

// })