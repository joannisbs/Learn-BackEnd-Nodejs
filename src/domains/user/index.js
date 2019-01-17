const database = require ('../../database')

const User = database.model('user')

class UserDomain {
  async add (user){
    return User.create(user)
  }
}

module.exports = UserDomain