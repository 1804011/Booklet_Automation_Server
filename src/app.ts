import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './middlewares/globalErrorHandler'
const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.get('/', (req, res) => res.send('welcome'))
app.get('*', (req, res) => res.status(400).json({ message: 'no route found' }))
app.use(globalErrorHandler)
export default app
