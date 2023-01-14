const express = require('express');
const app = express();

const {connectDB} = require('./config/db');

const productRoutes = require('./routes/product');

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/v1/products", productRoutes);

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