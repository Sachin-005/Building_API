import express from 'express'
import { MovieCreate, 
    MovieDelete, 
    MovieIndex, 
    MovieUpdate 
} from '../controllers/movies.controller.js';

// CRUD functionality of movies
// CLIENT => MIDDLEWARE=>SERVER

const router = express.Router()
// R - Reading
router.get('/',MovieIndex)
// C - For creating router
router.post('/',MovieCreate)

// U - for updating movies
router.put('/:id', MovieUpdate)

// D - For deleting movie
router.delete('/:id',MovieDelete)

export default router;