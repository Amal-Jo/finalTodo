import{Router} from 'express'
import {check} from 'express-validator'
import { getUsers, login, signUp } from '../controllers/user-controller'
import authCheck from '../middleware/authCheck'

const router:Router=Router()



//router.use(authCheck)


router.post('/signup',
[check('name','Name is required').not().isEmpty(),
check('email','E-mail is required').normalizeEmail().isEmail(),
check('password','password is required').not().isEmpty().isLength({min:6})
],
signUp)

router.post('/login',login)
router.get('/users',authCheck,getUsers)

export default router