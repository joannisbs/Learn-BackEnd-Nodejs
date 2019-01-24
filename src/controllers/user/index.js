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

const getUser = async (req, res, next) => {
  try {
    const listOfUser = await userDomain.getAll()
    res.json(listOfUser)

  } catch (error) {
    next(error)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const listOfUser = await userDomain.updatebyId(req.body, { userId: req.params.id })
    res.json(listOfUser)

  } catch (error) {
    next(error)
  }
}

const getOneUserById = async (req, res, next) => {
  try {
    const listOfUser = await userDomain.getById(req.params.id)
    res.json(listOfUser)

  } catch (error) {
    next(error)
  }
}

module.exports = {
  newUser,
  getUser,
  getOneUserById,
  updateUser
}


