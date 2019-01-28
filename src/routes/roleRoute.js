const router = require('express').Router()
const rolesController = require('../controllers/roles')
const lazyLoad = require('../middlewares/lazyLoad');

// routes of roles
router.get('/:id', rolesController.getOneRolesById)
router.get('', lazyLoad, rolesController.getAllRoles)

router.put('/:id', rolesController.updateRoles)

router.post('', rolesController.newRoles)

module.exports = router
