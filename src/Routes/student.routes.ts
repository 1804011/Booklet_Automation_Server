import express from 'express'
import { userControllers } from '../Controllers/user.controllers'
import { multerConfig } from '../config/multer'
import imageUploader from '../middlewares/imageUploade.middleware'
const studentRoutes = express.Router()
studentRoutes.post(
  '/',
  multerConfig.uploadImage.single('profileImage'),
  imageUploader,
  userControllers.createStudent,
)
studentRoutes.get('/', userControllers.getAllStudent)
studentRoutes.delete('/:studentId', userControllers.deleteStudent)
studentRoutes.get('/:studentId', userControllers.getStudent)
studentRoutes.patch('/:studentId', userControllers.updateStudent)

export default studentRoutes
