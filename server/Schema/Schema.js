import mongoose from "mongoose"
const {
    Schema
} = mongoose
const Song = new Schema({
    name: String,
    author: String,
    upLoadSong: String,
    songImg: String
}, {
    timestamp: true
})

const admin = new Schema({
    emailAddress: String,
    userName: String,
    password: String,
    confirmPassword: String,
    songs: [Song]
})

const RecordLabel = mongoose.model('musicappbackend', admin);

export default RecordLabel