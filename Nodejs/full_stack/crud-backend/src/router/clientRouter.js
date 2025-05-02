import express from 'express'
import * as clientContoller from '../constollers/clientController'

const router = express.Router();
router.get('/client', clientContoller.getClients)

export default router