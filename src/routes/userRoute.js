const router = require('express').Router()
const userController = require('../controllers/user')

router.post('/user', userController.newUser)
router.get('/user', userController.getUser)

module.exports = router