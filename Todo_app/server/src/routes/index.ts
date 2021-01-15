import {Router} from 'express'
import{getTodos,addTodo, updateTodo} from '../controllers/index'

const router:Router=Router()

router.get('/todos',getTodos);
router.post('/add',addTodo)
router.put('/edit/:id',updateTodo)

export default router