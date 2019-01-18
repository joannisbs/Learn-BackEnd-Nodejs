const R = require('ramda')
const faker = require('faker')
const UserDomain = require('./')
const bcrypt = require('bcrypt')

const userDomain = new UserDomain()

describe('add', () => {
  test('should add a user', async () => {
    const userMock = { 
      name: faker.name.findName(), 
      password: 'abacadabra',
      username:faker.name.firstName()
    }
    const user = await userDomain.add(userMock)
    const createUser = R.omit(['createdAt', 'deletedAt', 'updatedAt', 'id'], user.get({ raw: true }))

    const isPasswordCorrect = bcrypt.compare(userMock.password, createUser.password)
   
    expect(isPasswordCorrect).toBeTruthy()

    expect(R.omit(['password'],userMock)).toEqual(R.omit(['password'],createUser))
  })
})



