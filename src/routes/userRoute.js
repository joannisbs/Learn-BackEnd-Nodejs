const router = require('express').Router()
const userController = require('../controllers/user')
const lazyLoad = require('../middlewares/lazyLoad');

// routes of user
router.get('/:id', userController.getOneUserById)
router.get('', lazyLoad, userController.getAllUser)

router.put('/:id', userController.updateUser)

router.post('', userController.newUser)

module.exports = router
