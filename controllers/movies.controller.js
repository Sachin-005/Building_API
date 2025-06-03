import Movie from "../models/movie.model.js";

export const MovieIndex = (req,res) =>{
    res.send("Get all movies");
}

export const MovieCreate = async (req,res) =>{
    console.log(req.body)

    // validate your data always
  const newMovie =   new Movie({
        title: req.body.title,
        desc: req.body.desc
    });
  try{  
  const movie = await newMovie.save();
  return res.status(201).json(movie);
  }
  catch(error){
    return res.status(400);
  }
}

export const MovieUpdate = (req,res)=>{
    res.send("Update a movie")
}

export const MovieDelete = (req,res)=>{
    res.send("Movie Delete")
}