const { ApolloServer, gql } = require('apollo-server');
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Book = require('./Models/book')


const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
});


apolloServer.applyMiddleware({app})

apolloServer.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

const url = "mongodb+srv://mongo:fStqR3fnpNrABU_@cluster0.ya30d.mongodb.net/Online-Library?retryWrites=true&w=majority"
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

