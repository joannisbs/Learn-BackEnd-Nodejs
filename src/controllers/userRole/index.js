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

const getUserRoleLinkByUser = async (req, res, next) => {
  try {
    const listOfUserRole = await userRoleDomain.getByUserId(req.params.userId)
    res.json(listOfUserRole)

  } catch (error) {
    next(error)
  }
}

const getRoleLinkById = async (req, res, next) => {
  try {
    const listOfUserRole = await userRoleDomain.getById(req.params.id)
    res.json(listOfUserRole)

  } catch (error) {
    next(error)
  }
}

const getUserRoleLinkByRole = async (req, res, next) => {
  try {
    const listOfUserRole = await userRoleDomain.getByRoleId(req.params.roleId)
    res.json(listOfUserRole)

  } catch (error) {
    next(error)
  }
}
const getAllRoleLink = async (req, res, next) => {
  try {
    const listOfRoles = await userRoleDomain.getAll()
    res.json(listOfRoles)

  } catch (error) {
    next(error)
  }
}

const delRoleById = async (req, res, next) => {
  try {
    const listOfRoles = await userRoleDomain.delete(req.params.id)
    res.json(listOfRoles)

  } catch (error) {
    next(error)
  }
}

module.exports = {
  newUserRoleLink,
  getUserRoleLinkByUser,
  getRoleLinkById,
  getUserRoleLinkByRole,
  getAllRoleLink,
  delRoleById


}


