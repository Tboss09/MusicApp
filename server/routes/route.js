import express from 'express'
import {
    getAllMusicFiles
} from '../controllers/controller.js'
const route = express.Router()
//Get all music files
route.get('/', getAllMusicFiles)

export default route