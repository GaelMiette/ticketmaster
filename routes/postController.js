const express = require ("express");
const router = express.Router();

const { PostModel } = require('../Models/postModel.js');

router.get ('/', (req, res) => {
    PostModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("error to get data :" + err);
    })
})
