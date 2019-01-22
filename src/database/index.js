const Sequelize = require('sequelize');

const models = require('./models')

const config = require('./config/database.json')
const dbConfig = config[process.env.node_env]
let sequelize = new Sequelize(dbConfig)

const modelInstances = models.map(model => model(sequelize))

modelInstances.forEach(
  modelInstance => modelInstance.associate && modelInstance.associate(sequelize.models),
)

module.exports = sequelize
