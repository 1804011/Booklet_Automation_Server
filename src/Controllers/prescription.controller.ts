import { RequestHandler } from 'express'
import httpStatus from 'http-status'
import { prescriptionServices } from '../Services/prescription.services'
import { sendSuccessResponse } from '../Services/response.services'
import catchAsync from '../Shared/catchAsync'

const createPrescription: RequestHandler = catchAsync(async (req, res) => {
  const { bookletId, doctorId, medicines, description } = req.body
  const data = await prescriptionServices.createPrescription(
    bookletId,
    doctorId,
    medicines,
    description,
  )
  sendSuccessResponse<typeof data>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Prescription created successfully',
    data,
  })
})

const deletePrescription: RequestHandler = catchAsync(async (req, res) => {
  const { prescriptionId } = req.params
  const data = await prescriptionServices.deletePrescription(prescriptionId)
  sendSuccessResponse<typeof data>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Prescription deleted successfully',
    data,
  })
})
const getPrescription: RequestHandler = catchAsync(async (req, res) => {
  const { prescriptionId } = req.params
  const data = await prescriptionServices.getPrescription(prescriptionId)
  sendSuccessResponse<typeof data>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Prescription retreived successfully',
    data,
  })
})
export const prescriptionControllers = {
  createPrescription,
  deletePrescription,
  getPrescription,
}