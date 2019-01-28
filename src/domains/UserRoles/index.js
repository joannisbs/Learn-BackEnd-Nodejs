const database = require ('../../database')
const R = require('ramda')
const UserRoles = database.model('userRoles')

class RolesDomain {
  async add (roleLink){
    const role = await UserRoles.create(roleLink)
    return role.get({ raw: true })
  }

  async delete (roleLinkId){
    return UserRoles.destroy({
      where: { id: roleLinkId }
    })
  }

  async getById (roleLinkId){
    const role = await UserRoles.findByPk(roleLinkId)
    return role.get({ raw: true })
  }

  async getByUserId (userId, lazyLoad){
    const role = await UserRoles.findAll( {where:{ userId }},{ raw: true, offset: lazyLoad.offset, limit: lazyLoad.limit } )
    return role
  }

  async getByRoleId (roleId, lazyLoad){
    const role = await UserRoles.findAll( {where:{ roleId }},{ raw: true, offset: lazyLoad.offset, limit: lazyLoad.limit } )
    return role
  }

  async getAll (lazyLoad){
    return UserRoles.findAll({ raw: true, offset: lazyLoad.offset, limit: lazyLoad.limit })
  }
}


module.exports =  RolesDomain 