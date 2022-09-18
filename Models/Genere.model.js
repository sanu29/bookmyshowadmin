const mongoose = require("mongoose")
const {Schema} = mongoose 


const gener = new Schema({name:String})
const genere = mongoose.model("genere",gener)


module.exports = {genere}