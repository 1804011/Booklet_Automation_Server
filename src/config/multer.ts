/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express'
import multer from 'multer'
import path from 'path'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    cb(null, `${Date.now()}${ext}`)
  },
})
const fileFilter = (req: Request, file: any, cb: any) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true)
  } else {
    cb(new Error('Only images are allowed!'), false)
  }
}
const uploadImage = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024, // 1 MB limit
  },
})
const excelStorage = multer.memoryStorage()
const uploadExcel = multer({ storage: excelStorage })
export const multerConfig = { uploadImage, uploadExcel }
