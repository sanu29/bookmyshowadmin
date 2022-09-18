var express = require("express");
var router= express.Router();
const {movies} = require("../Models/Movies.model")
const {genere} = require("../Models/Genere.model")
const {theater} = require("../Models/Theater.model")
const mongoose = require("mongoose")

router.get("/movies/:id",async (req,res) => {
  
  try{
    const  id =(req.params.id)
  console.log(id)
  console.log("paramsChecked", req.params)
  const result = await movies.find( {"_id": id})
  
  res.json(result)
  }
  catch(err){res.status(500).json({ success: false, message: "unable to get products", errorMessage: err.message })}
  })

router.get("/movies/",async (req,res)=>{
  try{
  const data = await movies.find({});     
  console.log("Successfully got movies data")
  res.json({data})
}
catch (err) {
    res.status(500).json({ success: false, message: "unable to get products", errorMessage: err.message })
}
})

router.get("/genere/",async (req,res)=>{
  try{
    console.log(genere)
  const data = await genere.find({});     
  console.log("Successfully got genere data")
  res.json({data})
}
catch (err) {
    res.status(500).json({ success: false, message: "unable to get products", errorMessage: err.message })
}
})


router.get("/theater/",async (req,res)=>{
  try{
    console.log(theater)
  const data = await theater.find({});     
  console.log("Successfully got theater data")
  res.json({data})
}
catch (err) {
    res.status(500).json({ success: false, message: "unable to get theater", errorMessage: err.message })
}
})

router.get("/theater/:id",async (req,res)=>{
  try{
    const  id =(req.params.id)
  console.log(id)
  console.log("paramsChecked", req.params)
  const data = await theater.find( {  "_id": id});     
  console.log("Successfully got theater data")
  res.json({data})
}
catch (err) {
    res.status(500).json({ success: false, message: "unable to get theater", errorMessage: err.message })
}
})

router.get("/movie/allTheater/:location/:id",async (req,res)=>{
  try{

    const  location =(req.params.location)
    const  id =(req.params.id)
    console.log("paramsChecked", req.params)
    let data = await theater.find({})
      let locData =  data.filter((item)=>{
        if(item.Location===location)
        {return item}
        })
let mainData= []
    
    locData.map((item)=>item.Movies.filter((val)=>{if(val.MovieId['$oid']==id){
      mainData.push({TheaterName:item.TheaterName,val})
    }}))
  console.log("Successfully got theater data")
  res.json({data:mainData})
}
catch (err) {
    res.status(500).json({ success: false, message: "unable to get theater", errorMessage: err.message })
}
})

router.post("/movies",async (req,res) => {
  console.log("in post")
  try{

    console.log(req.body)
    const movie = req.body;
    console.log(movie)
    const NewMovie = new movies(movie);
    console.log(NewMovie)
    const savedProduct = await NewMovie.save();
    const data = await movies.find({});   
    res.json(data)
  }
  catch(err){res.status(500).json({ success: false, message: "unable to get products", errorMessage: err.message })}
  })

router.post("/movies/update",async (req,res) => {

  try{
    const query = {_id: req.body.data._id};
    const newmovie = req.body.data;
    delete newmovie._id;
    const savedProduct =  movies.findOneAndUpdate(query,           newmovie, async function (err, result) {
    if (err){
        res.status(500).json({ success: false, message: "unable to update data", errorMessage: err.message })
    }else{
    const data = await movies.find( {"_id": query._id})
    res.json(data)
        
    }
})
  }catch(err){console.log(err)}

})
module.exports = router;
