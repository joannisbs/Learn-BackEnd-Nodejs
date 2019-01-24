const router = require('express').Router()
const userController = require('../controllers/user')
const rolesController = require('../controllers/roles')

// routes of user
router.get('/user/:id', userController.getOneUserById)
router.get('/user', userController.getUser)

router.put('/user/:id', userController.updateUser)

router.post('/user', userController.newUser)

// routes of roles
router.get('/role/:id', rolesController.getOneRolesById)
router.get('/role', rolesController.getRoles)

router.put('/role/:id', rolesController.updateRoles)

router.post('/role', rolesController.newRoles)


module.exports = router
