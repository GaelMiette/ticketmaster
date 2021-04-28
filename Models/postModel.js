const mongoose = require("mongoose");
const PostModel = mongoose.model(
    "ticketmaster",
    {
        author :{
            type: String,
            required : true
        },
        message :{
            type: String,
            required :true
        },
        categorie:{
            type: String,
            required : true
        },
        date :{
            type: date,
            default : Date.now
        }

    },
    "posts",
);

module.exports = { PostModel};