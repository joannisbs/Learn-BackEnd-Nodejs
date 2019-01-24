const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const roles = sequelize.define('roles', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING(523),
      allowNull: false,
    }
  },
  {
    paranoid: true,
    timestamp: true
  })
  roles.associate = (models) => {
    roles.hasMany(models.userRoles)
  }

  return roles
}