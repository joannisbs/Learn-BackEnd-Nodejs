const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const userRoles = sequelize.define('userRoles', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    roleId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  userRoles.associate = (models) => {
    userRoles.belongsTo(models.user)
    userRoles.belongsTo(models.roles)
  }

  return userRoles
}