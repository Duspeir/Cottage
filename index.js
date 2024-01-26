import express from 'express';
import sequelize from './src/Components/UI/server_connect/datainit.js'

const PORT=process.env.PORT || 5000;

const app = express()

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, console.log('Сервер начал работу'))
    } catch(e){
        console.log(e)
    }
}

start();