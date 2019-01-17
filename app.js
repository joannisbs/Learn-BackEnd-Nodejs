const app = require('express')()

const Sequelize = require('sequelize');

const controllerPad = require('./src/controllers')

const bodyParser = require('body-parser')

const User = require('./modal/modal')


app.use(bodyParser.urlencoded({ extended: false }));




app.get('/', controllerPad )
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