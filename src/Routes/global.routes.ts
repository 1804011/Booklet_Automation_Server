import express from 'express'
import adminRoutes from './admin.routes'
import bookletRoutes from './booklet.routes'
import doctorRoutes from './doctor.routes'
import studentRoutes from './student.routes'

const globalRoutes = express.Router()
const moduleRoutes = [
  {
    path: '/student',
    route: studentRoutes,
  },
  {
    path: '/doctor',
    route: doctorRoutes,
  },
  {
    path: '/admin',
    route: adminRoutes,
  },
  {
    path: '/booklet',
    route: bookletRoutes,
  },
]
moduleRoutes.forEach(route => globalRoutes.use(route.path, route.route))
export default globalRoutes
