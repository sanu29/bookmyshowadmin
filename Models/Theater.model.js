const mongoose = require("mongoose")
const {Schema} = mongoose 
const DateTimeSchema = new Schema({ _id: mongoose.ObjectId,DateAndTime:Date,Price:Number})
const theaters = new Schema({
  TheaterName:String,
  Location:String,
  Movies:[{MovieId:Object,
          Date:[]}]
})

const theater = mongoose.model("theater",theaters)
module.exports = {theater}