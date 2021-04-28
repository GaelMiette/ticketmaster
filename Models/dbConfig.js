const mongoose = require ('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/ticketmaster",
    {useNewUrlParser : true, useUnifiedTopology: true },
    (err)=> {
        if(!err) console.log("mongodb connected");
        else console.log("connection error:"+ err)
    }
)