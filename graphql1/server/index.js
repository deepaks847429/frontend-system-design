const express= require('express')
const {expressMiddleware} = require('@apollo/server/express4')
const bodyParser=require('body-parser')
const cors=require('cors');
const { ApolloServer } = require('@apollo/server');

async function startserver(){
  const app=express();
  const server=new ApolloServer({
    typeDefs:`
    type Todo{
    id:ID!
    title: String!
    completed: Boolean }
    
    
    type Query{
    getTodos:[Todo]
  }
    
  `,
  resolvers:{
    Query:{
      getTodos:async ()=>(await axios.get('https://jsonplaceholder.typicode.com/todos')).data,
    },
  }
  }
  
);


  app.use(bodyParser.json());
  app.use(cors());
  await server.start()
  app.use("/graphql", expressMiddleware(server));
  app.listen(8000, ()=>{
    console.log("server started")
  })
}