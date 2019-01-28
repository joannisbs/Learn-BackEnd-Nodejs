const router = require('express').Router()
const linkUserRolesController = require('../controllers/userRole');
const lazyLoad = require('../middlewares/lazyLoad');

// routes of link-user-role
router.delete('/:id', linkUserRolesController.delRoleById)

router.get('/user/:userId', lazyLoad, linkUserRolesController.getAllUserRoleLinksByUser)
router.get('/role/:roleId', lazyLoad, linkUserRolesController.getAllUserRoleLinksByRole)
router.get('/:id', linkUserRolesController.getOneRoleLinkById)
router.get('/', lazyLoad, linkUserRolesController.getAllRoleLinks)

//router.put('/role/:id', rolesController.updateRoles)

router.post('', linkUserRolesController.newUserRoleLink)

module.exports = router
