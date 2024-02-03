import client from './datainit';

const express = require('express')
const app = express();

app.listen(5432, ()=>{
    console.log("All is OK");
})

client.connect();