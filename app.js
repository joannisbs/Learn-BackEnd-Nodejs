const app = require('express')()

const controllerPad = require('./src/controllers')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', controllerPad )


app.listen(5000, () => console.log('runninng....\nmode ' + process.env.node_env))
