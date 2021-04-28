const express = require('express');
const app = express();
require('./Models/dbConfig');
const postRoutes = require('./routes/postController');
const bodyParser = require ('body-parser');
const cors = require ('cors');

app.use(cors());
app.use(bodyParser.json());

app.listen(5000, ()=> console.log('Server started: 5000'));