const router = require('express').Router()
const userController = require('../controllers/user')
const rolesController = require('../controllers/roles')
const linkUserRolesController = require('../controllers/userRole');

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

// routes of link-user-role
// router.get('/role/:id', rolesController.getOneRolesById)
// router.get('/role', rolesController.getRoles)

// router.put('/role/:id', rolesController.updateRoles)

router.post('/link-user-role', linkUserRolesController.newUserRoleLink)

module.exports = router
