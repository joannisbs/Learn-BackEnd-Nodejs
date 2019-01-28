const router = require('express').Router()
const userController = require('../controllers/user')
const rolesController = require('../controllers/roles')
const linkUserRolesController = require('../controllers/userRole');
const lazyLoad = require('../middlewares/lazyLoad');

// routes of user
router.get('/user/:id', userController.getOneUserById)
router.get('/user', lazyLoad, userController.getAllUser)

router.put('/user/:id', userController.updateUser)

router.post('/user', userController.newUser)

// routes of roles
router.get('/role/:id', rolesController.getOneRolesById)
router.get('/role', lazyLoad, rolesController.getAllRoles)

router.put('/role/:id', rolesController.updateRoles)

router.post('/role', rolesController.newRoles)

// routes of link-user-role
router.delete('/link-user-role/:id', linkUserRolesController.delRoleById)

router.get('/link-user-role/user/:userId', lazyLoad, linkUserRolesController.getAllUserRoleLinksByUser)
router.get('/link-user-role/role/:roleId', lazyLoad, linkUserRolesController.getAllUserRoleLinksByRole)
router.get('/link-user-role/:id', linkUserRolesController.getOneRoleLinkById)
router.get('/link-user-role/', lazyLoad, linkUserRolesController.getAllRoleLinks)

//router.put('/role/:id', rolesController.updateRoles)

router.post('/link-user-role', linkUserRolesController.newUserRoleLink)

module.exports = router
