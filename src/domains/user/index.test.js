const R = require('ramda')
const faker = require('faker')
const UserDomain = require('./')

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

    expect(userMock).toEqual(createUser)
  })
})