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
      type: Sequelize.STRING,
      allowNull: false,
    },
  })
  roles.associate = (models) => {
    roles.belongsTo(models.userRoles)
  }

  return roles
}