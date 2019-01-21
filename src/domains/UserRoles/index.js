const database = require ('../../database')
const R = require('ramda')
const UserRoles = database.model('userRoles')

class RolesDomain {
  async add (roleLink){
    return (await UserRoles.create(roleLink)).get({ raw: true })
  }
  // async getById (rolesId){
  //   return (await Roles.findByPk(rolesId)).get({ raw: true})
  // }
  // async getAll (){
  //   return Roles.findAll({ raw: true })
  // }
  // async updateById(rolerToUpdate, options = {}){
  //   const { rolesId } = options
  //   const rolesInstance = await Roles.findByPk(rolesId)
  //   const rolerToUpdateData = R.omit(['id'], rolerToUpdate)
  
  //   return (await rolesInstance.update(rolerToUpdateData)).get({ raw: true})
  // }

}

module.exports =  RolesDomain 