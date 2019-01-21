const database = require ('../../database')
const R = require('ramda')
const User = database.model('user')

class UserDomain {
  async add (user){
    return (await User.create(user)).get({ raw: true})
  }

  async updatebyId(userToUpdate, options = {}){
    const { userId } = options
    const userInstance = await User.findByPk(userId)
    const userToUpdateData = R.omit(['id'], userToUpdate)
  
    return (await userInstance.update(userToUpdateData)).get({ raw: true})
  }
  
  async getById (userId){
    console.log(userId)
    return (await User.findByPk(userId)).get({ raw: true})
  }

}

module.exports = UserDomain