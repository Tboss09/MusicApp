import express from "express"
const router =  express.Router()
import {
    CreateNewMusic
} from '../controllers/controller.js'

router.post('/music',CreateNewMusic)
export default router
