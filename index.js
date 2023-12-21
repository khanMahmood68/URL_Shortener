// importing express
import express from 'express';


const port = 3000

// Create server
const app = express();

// listening app
app.listen(port,(err)=>{
    if(err){
        console.log(`Error to connect server ${err}`);
    }
    console.log(`The server is up on port: ${port}`);
})
