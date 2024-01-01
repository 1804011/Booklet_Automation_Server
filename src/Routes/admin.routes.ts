import express from 'express'
import { userControllers } from '../Controllers/user.controllers'
import { multerConfig } from '../config/multer'
import imageUploader from '../middlewares/imageUploade.middleware'
const adminRoutes = express.Router()
adminRoutes.post(
  '/',
  multerConfig.uploadImage.single('profileImage'),
  imageUploader,
  userControllers.createAdmin,
)
adminRoutes.patch(
  '/',
  multerConfig.uploadImage.single('profileImage'),
  imageUploader,
  userControllers.updateAdmin,
)
export default adminRoutes
