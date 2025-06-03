import express from "express";
import movieRoutes from "./routes/movies.route.js"
import connectDB from "./lib/db.js";

const app = express()
const PORT = 6969

// Data understanding middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
connectDB();
app.get('/',(req,res)=>{
    res.json({msg: "Hello Studens"});
});

app.use("/movies",movieRoutes)
app.listen(PORT,()=>{
    console.log(`The server is running at http://127.0.0.1:${PORT}`)
})

// dry principle
// kiss principle - start with bascis and go ahead