import express from 'express'
import { authControllers } from '../Controllers/auth.controller'
const authRoutes = express.Router()
authRoutes.post('/student/login', authControllers.studentLogin)
authRoutes.post('/doctor/login', authControllers.doctorLogin)
authRoutes.post('/admin/login', authControllers.adminLogin)
export default authRoutes
