import express from 'express'
import { userControllers } from '../Controllers/user.controllers'
import { multerConfig } from '../config/multer'
import imageUploader from '../middlewares/imageUploade.middleware'
const doctorRoutes = express.Router()
doctorRoutes.post(
  '/',
  multerConfig.uploadImage.single('profileImage'),
  imageUploader,
  userControllers.createDoctor,
)
doctorRoutes.get('/', userControllers.getAllDoctor)
doctorRoutes.get('/:doctorId', userControllers.getDoctor)
doctorRoutes.patch(
  '/:doctorId',
  multerConfig.uploadImage.single('profileImage'),
  imageUploader,
  userControllers.updateDoctor,
)
doctorRoutes.delete('/:doctorId', userControllers.deleteDoctor)
export default doctorRoutes
