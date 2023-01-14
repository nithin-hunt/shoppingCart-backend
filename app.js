const express = require('express');
const app = express();

const {connectDB} = require('./config/db');

const PORT = 5000;

const start = async() => {
    try {
        await connectDB();
        app.listen(PORT, ()=> {
            console.log(`Server is running on port ${PORT} ...`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();