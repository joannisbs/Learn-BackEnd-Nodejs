const UserDomain = require('../../domains/user')

const userDomain = new UserDomain()

const newUser = async (req, res, next) => {
  try {
    const createdUser = await userDomain.add(req.body)
    res.json(createdUser)

  } catch (error) {
    next(error)
  }
}


module.exports = {
  newUser,
}


