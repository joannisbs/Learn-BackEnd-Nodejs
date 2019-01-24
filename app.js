const app = require('express')()
const cors = require('cors')
const routes = require('./src/routes/userRoute')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


app.use('/api', routes )


app.listen(5000, () => console.log('runninng....\nmode ' + process.env.node_env))
