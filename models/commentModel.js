// import mongoos
const mongoose = require("mongoose");


//route handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId ,//post basically ek prakar ki id ko store kar rha hoga.
        ref: "Post"// this is the reference to post model

    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        required:true
    },
    body:{
        type: String,
        required:true,
    }

})

module.exports = mongoose.model("Comment",commentSchema)