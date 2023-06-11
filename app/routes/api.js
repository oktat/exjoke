const Router = require('express')
const router = Router()

const AuthController = require('../controllers/authcontroller')
const UserController = require('../controllers/usercontroller')
const JokeController = require('../controllers/jokecontroller')
const { verifyToken } = require('../middleware/authjwt')
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', UserController.index)

router.get('/jokes', JokeController.index)
router.post('/jokes', JokeController.store)

module.exports = router
