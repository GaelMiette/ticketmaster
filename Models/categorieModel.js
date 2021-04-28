const mongoose = require("mongoose");
const CategorieModel = mongoose.model(
    "ticketmaster",
    {
        nom: {
            type : String,
            required : true
        }
        

    },
    "posts",
);

module.exports = { CategorieModel };