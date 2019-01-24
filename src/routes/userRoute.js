const router = require('express').Router()
const userController = require('../controllers/user')

router.get('/user/:id', userController.getOneUserById)
router.get('/user', userController.getUser)

router.put('/user/:id', userController.updateUser)

router.post('/user', userController.newUser)

module.exports = router