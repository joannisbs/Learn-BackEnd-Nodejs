const router = require('express').Router()
const userController = require('../controllers/user')
const rolesController = require('../controllers/roles')

router.get('/user/:id', userController.getOneUserById)
router.get('/user', userController.getUser)

router.put('/user/:id', userController.updateUser)

router.post('/user', userController.newUser)

router.post('/roles', rolesController.newRoles)


module.exports = router
