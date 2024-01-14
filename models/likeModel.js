const mongoose = require("mongoose")


const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId ,//post basically ek prakar ki id ko store kar rha hoga.
        ref: "Post"// this is the reference to post model

    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        required:true
    }
})

module.exports("Like",likeSchema)