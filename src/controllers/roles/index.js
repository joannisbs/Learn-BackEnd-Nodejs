const RolesDomain = require('../../domains/roles')

const rolesDomain = new RolesDomain()


const newRoles = async (req, res, next) => {
  try {
    const createdRoles = await rolesDomain.add(req.body)
    res.json(createdRoles)

  } catch (error) {
    next(error)
  }
}

const getAllRoles = async (req, res, next) => {
  try {
    const listOfRoles = await rolesDomain.getAll(res.locals.lazyload)
    res.json(listOfRoles)

  } catch (error) {
    next(error)
  }
}

const updateRoles = async (req, res, next) => {
  try {
    const listOfRoles = await rolesDomain.updateById(req.body, { rolesId: req.params.id })
    res.json(listOfRoles)

  } catch (error) {
    next(error)
  }
}

const getOneRolesById = async (req, res, next) => {
  try {
    const listOfRoles = await rolesDomain.getById(req.params.id)
    res.json(listOfRoles)

  } catch (error) {
    next(error)
  }
}




module.exports = {
  newRoles,
  getAllRoles,
  getOneRolesById,
  updateRoles,
}


