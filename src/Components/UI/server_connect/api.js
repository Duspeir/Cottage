import client from './datainit';
const express = require('express')
const app = express();

app.listen(3300, ()=>{
    console.log("All is OK");
})

client.connect();