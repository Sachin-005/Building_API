import express from "express";

const app = express()
const PORT = 6969
app.get('/',(req,res)=>{
    res.json({msg: "Hello Studens"});
});

app.listen(PORT,()=>{
    console.log(`The server is running at http://127.0.0.1:${PORT}`)
})

// dry principle
// kiss principle - start with bascis and go ahead