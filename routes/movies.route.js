import express from 'express'
import {MovieCretae, MovieDelete, MovieIndex, MovieUpdate} from '../controllers/movies.controllers.js'
// CRUD functionality of movies
// CLIENT => MIDDLEWARE=>SERVER

const router = express.Router()
// R - Reading
router.get('/',MovieIndex)
// C - For creating router
router.post('/',MovieCretae)

// U - for updating movies
router.put('/:id', MovieUpdate)

// D - For deleting movie
router.delete('/:id',MovieDelete)

export default router;