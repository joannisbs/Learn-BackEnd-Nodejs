const app = require('express')()
const cors = require('cors')
const userRoute = require('./src/routes/userRoute')
const rolesRoute = require('./src/routes/roleRoute')
const userRolesLinkRoute = require('./src/routes/userRoleLinkRoute')



const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


app.use('/api/user', userRoute )
app.use('/api/role', rolesRoute )
app.use('/api/link-user-role', userRolesLinkRoute )


app.listen(5000, () => console.log('runninng....\nmode ' + process.env.node_env))
