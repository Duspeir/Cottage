import express from 'express';
import sequelize from './src/Components/UI/server_connect/datainit.js'
import router from './src/Components/UI/Controller/Router.js';
import pool from './db.js';
import cors from 'cors';
const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json())
app.use('/api', router)

async function startApp(){
  try{
    pool.connect();
    app.listen(PORT, () => console.log("Server started successfully on PORT: ", PORT));
  } catch(e){
    console.log(e);
  }
}

startApp();