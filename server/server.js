import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import route from "./routes/route.js"
import MusicAppBackend from './Schema/Schema.js'

// server initialisation
const app = express()
const port = 8000 || process.env.PORT

dotenv.config()

app.use(cors())

// Database initialisation and connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("Database succesfully connected")






app.get('/api/v1', route)











    app.listen(port, () => {
        console.log(`Server Listening at port ${port}`)
    })
});