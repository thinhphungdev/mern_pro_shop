import express from "express";
import dotenv from "dotenv"
import allProduct  from './data/products.js';

// Config ENV
dotenv.config();

// Init express app 
const app = express();

app.get('/', (req, res) => {
    res.send('API is running');
});

// Get list of products
app.get('/api/products/', (req, res) => {
    res.json(allProduct);
})

// Get Product by ID
app.get('/api/products/:id', (req, res) => {
    const product = allProduct.find(product => product._id === req?.params?.id);
    if (!product) res.send("Product doesn't exist! ")
    res.send(product)
});


const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} at port + ${process.env.PORT}`));