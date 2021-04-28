const express = require('express');
const app = express();
require('./Models/dbConfig.js');
const postRoutes = require('./routes/postController');

app.use('/' , postRoutes)

app.listen(5500, ()=> console.log('Server started: 5500'));




module.exports = app;