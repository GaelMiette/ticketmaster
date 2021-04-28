const express = require ("express");
const router = express.Router();

const { PostModel } = require('../Models/postModel.js');

router.get ('/', (req, res) => {
    PostModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("error to get data :" + err);
    })
})

router.post ('/' , (req, res)=>{
const newRecord = new PostModel({
    author : req.body.author,
    message: req.body.message
});

newRecord.save((err, docs) =>{
    if (!err) res.send(docs);
    else console.log('error creating new data :' + err);
})
});

module.exports = { router };
