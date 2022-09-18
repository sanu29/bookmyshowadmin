const mongoose = require('mongoose')
const {Schema} = mongoose
const url = "mongodb+srv://Sanu29:Sanu29@cluster0.auz2r.mongodb.net/bookmyshow?retryWrites=true&w=majority";
async function  databaseConnection(){
  try{
    await mongoose.connect(url)
    console.log("Database Connected")
   
  }
catch(err){console.log(err)}
}

databaseConnection()


