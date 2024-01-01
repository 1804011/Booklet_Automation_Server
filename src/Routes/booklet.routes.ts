import express from 'express'
import { bookletControllers } from '../Controllers/booklet.controllers'
const bookletRoutes = express.Router()
bookletRoutes.post('/', bookletControllers.createBooklet)
bookletRoutes.get('/:serialNo', bookletControllers.getBooklet)
bookletRoutes.delete('/:serialNo', bookletControllers.deleteBooklet)
export default bookletRoutes
