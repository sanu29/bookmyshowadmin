const mongoose = require("mongoose")
const {Schema} = mongoose 
// const castSchema = new Schema({name:String,Image:String})
// const castingSchema =     new Schema({
//       MaleLead: castSchema,
//       FemaleLead: castSchema,
//       MaleSideLead: castSchema,
//       FemaleSideLead:castSchema
//     }) 
const Movies = new Schema({
  movieName:String,
  Cast : {
    MaleLead:{Name:String, Image:String},
    FemaleLead:{Name:String, Image:String},
    MaleSideLead:{Name:String, Image:String},
    FemaleSideLead:{Name:String, Image:String}
  },
  Image : String,
  Language:String,
  Locations:[String],
  Trending:Boolean,
  HeroImage:String,
  Genere:String
})

const movies = mongoose.model("movies",Movies)


module.exports = {movies}