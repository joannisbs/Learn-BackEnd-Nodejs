const UserDomain = require('../../domains/user')

const userDomain = new UserDomain()
//console.log()

const newUser = async (req, res, next) => {
  try {
    const createdUser = await userDomain.add(req.body)
    res.json(createdUser)

  } catch (error) {
    next(error)
  }
}


const getAllUser = async (req, res, next) => {
  try {
    const listOfUser = await userDomain.getAll(res.locals.lazyload)
    res.json(listOfUser)

  } catch (error) {
    next(error)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const user = await userDomain.updatebyId(req.body, { userId: req.params.id })
    res.json(user)

  } catch (error) {
    next(error)
  }
}

const getOneUserById = async (req, res, next) => {
  try {
    const user = await userDomain.getById(req.params.id)
    res.json(user)

  } catch (error) {
    next(error)
  }
}

module.exports = {
  newUser,
  getAllUser,
  getOneUserById,
  updateUser
}


