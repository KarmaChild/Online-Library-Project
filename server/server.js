const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Book = require('./Models/book')


const url = ""
const connection = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connection).then(()=>{
    console.info("💯 Connected to DB")
}).catch((error)=>{
    console.log("❌ Error:",error)
})


app.get('/read',(req,res) =>{
    Book.find().then((result)=>{
        res.send(result)
        console.log(result)
    }).catch((error)=>{
        console.log("❌ Error:",error)
    })
})



app.listen(8000, ()=> console.log("🚀 server running!"))

