const UserRoleDomain = require('../../domains/UserRoles')

const userRoleDomain = new UserRoleDomain()

const newUserRoleLink = async (req, res, next) => {
  try {
    const createdUserRole = await userRoleDomain.add(req.body)
    res.json(createdUserRole)

  } catch (error) {
    next(error)
  }
}

// const getUser = async (req, res, next) => {
//   try {
//     const listOfUserRole = await userRoleDomain.getAll()
//     res.json(listOfUserRole)

//   } catch (error) {
//     next(error)
//   }
// }

// const updateUser = async (req, res, next) => {
//   try {
//     const listOfUserRole = await userRoleDomain.updatebyId(req.body, { userId: req.params.id })
//     res.json(listOfUserRole)

//   } catch (error) {
//     next(error)
//   }
// }

// const getOneUserById = async (req, res, next) => {
//   try {
//     const listOfUserRole = await userRoleDomain.getById(req.params.id)
//     res.json(listOfUserRole)

//   } catch (error) {
//     next(error)
//   }
// }

module.exports = {
  newUserRoleLink,


}


