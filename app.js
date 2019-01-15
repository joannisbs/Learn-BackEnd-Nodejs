const app = require('express')()

const Sequelize = require('sequelize');

const dbconfig = {
  database: 'postgres',
  username: 'postgres',
  password: 'postgres'
}

const sequelize = new Sequelize({
  ...dbconfig,
  host: 'localhost',
  dialect:'postgres',
  operatorsAliases: false,
  port:5431,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})

// const User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// });

// User.sync().then(() => {
//   return User.create({
//     firstName: 'Guilherme',
//     lastName: 'stain'
//   });
// })

// app.use('/api/users', async (req, res, next) => {
//   const firstName = 'guilherme'
//   const users = await User.findAll({ 
//     where: { firstName },
//     attributes: ['id', 'firstName'],
//     limit: 5, offset: 0
//   })
//   res.json(users)
// })

app.listen(5000, () => console.log('runninng....'))