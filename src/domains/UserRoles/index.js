const database = require ('../../database')
const R = require('ramda')
const UserRoles = database.model('userRoles')

class RolesDomain {
  async add (roleLink){
    const role = await UserRoles.create(roleLink)
    return role.get({ raw: true })
  }

  async del (roleLinkId){
    return UserRoles.destroy(roleLinkId)
  }

  async getById (roleLinkId){
    const role = await UserRoles.findByPk(roleLinkId)
    return role.get({ raw: true })
  }

  async getAll (){
    return UserRoles.findAll({ raw: true })
  }

  // async updateById(rolerToUpdate, options = {}){
  //   const { rolesId } = options
  //   const rolesInstance = await Roles.findByPk(rolesId)
  //   const rolerToUpdateData = R.omit(['id'], rolerToUpdate)
  
  //   return (await rolesInstance.update(rolerToUpdateData)).get({ raw: true})
  // }

}

module.exports =  RolesDomain 