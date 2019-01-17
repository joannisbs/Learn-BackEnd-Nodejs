const Sequelize = require('sequelize');

const models = require('./models')

const config = require('./config/database.json')

const sequelize = new Sequelize(config.development)

const modelInstances = models.map(model => model(sequelize))

modelInstances.forEach(
  modelInstance => modelInstance.associate && modelInstance.associate(sequelize.models),
)


  module.exports = sequelize
