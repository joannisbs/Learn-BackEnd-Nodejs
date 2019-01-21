const database = require ('../../database')
const R = require('ramda')
const User = database.model('user')

class UserDomain {
  async add (user){
    return User.create(user)
  }

  async updatebyId(userToUpdate, options = {}){
    const { userId } = options
    const userInstance = await User.findByPk(userId)
    const userToUpdateData = R.omit(['id'], userToUpdate)
  
    return userInstance.update(userToUpdateData)
  }
  
  async getById (userId){
    console.log(userId)
    return User.findByPk(userId)
  }

}

module.exports = UserDomain