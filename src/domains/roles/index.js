const database = require ('../../database')
const R = require('ramda')
const Roles = database.model('roles')

class RolesDomain {
  async add (roles){
    return (await Roles.create(roles)).get({ raw: true })
  }
  async getById (rolesId){
    return (await Roles.findByPk(rolesId)).get({ raw: true})
  }
  async getAll (lazyLoad){
    return Roles.findAll({ raw: true, offset: lazyLoad.offset, limit: lazyLoad.limit })
  }
  async updateById(rolerToUpdate, options = {}){
    const { rolesId } = options
    const rolesInstance = await Roles.findByPk(rolesId)
    const rolerToUpdateData = R.omit(['id'], rolerToUpdate)
  
    return (await rolesInstance.update(rolerToUpdateData)).get({ raw: true})
  }

}

module.exports =  RolesDomain 