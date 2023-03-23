//CommonJS
// const express = require('express')

import app from "./app.js";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
//Puerto
app.listen(PORT);
console.log(`Iniciada en el puerto ${PORT}`)