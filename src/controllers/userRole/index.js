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

const getAllUserRoleLinksByUser = async (req, res, next) => {
  try {
    const listOfUserRole = await userRoleDomain.getByUserId(req.params.userId)
    res.json(listOfUserRole)

  } catch (error) {
    next(error)
  }
}

const getOneRoleLinkById = async (req, res, next) => {
  try {
    const listOfUserRole = await userRoleDomain.getById(req.params.id)
    res.json(listOfUserRole)

  } catch (error) {
    next(error)
  }
}

const getAllUserRoleLinksByRole = async (req, res, next) => {
  try {
    const listOfUserRole = await userRoleDomain.getByRoleId(req.params.roleId)
    res.json(listOfUserRole)

  } catch (error) {
    next(error)
  }
}
const getAllRoleLinks = async (req, res, next) => {
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
  getAllUserRoleLinksByUser,
  getOneRoleLinkById,
  getAllUserRoleLinksByRole,
  getAllRoleLinks,
  delRoleById


}


