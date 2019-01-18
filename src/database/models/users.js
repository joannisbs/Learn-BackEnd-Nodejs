const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = (sequelize) => {
  const user = sequelize.define('user', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    
  })
  user.associate = (models) => {
    user.hasMany(models.userRoles)
  }

  user.beforeCreate(hashPassword)
  user.beforeUpdate(hashPassword)
  return user
}

let hashPassword = function (user) {
  if (!user.changed('password')) return
  return new Promise(function (resolve, reject) {
    bcrypt.hash(user.password, 10,(err, hashedPassword) =>{
      if (err) reject(err)
      else resolve(hashedPassword)
    })
  }).then(function (hashedPassword) {
    user.password = hashedPassword
  })
}
