import express from "express";

const app = express()
const PORT = 6969
app.get('/',(req,res)=>{
    res.json({msg: "Hello Studens"});
});
// CRUD functionality of movies

// R - Reading
app.get('/movies',()=>){

}
// C - For creating movies
app.post('/movies',()=>{

})

// U - for updating movies
app.put('/movies/:id', ()=>{

})

// D - For deleting movie
app.delete('/movies/:id',()=>{
    
})
app.listen(PORT,()=>{
    console.log(`The server is running at http://127.0.0.1:${PORT}`)
})

// dry principle
// kiss principle - start with bascis and go ahead