const mongoose = require("mongoose");
require("dotenv")


const dbConnect = () =>{
    console.log("ok!!");
    mongoose.connect(process.env.DATABASE_URL,{
        useNewURlParser: true,
        useUnifiedTopology:true,
    }).then(console.log("DB connected"))
    .catch((err) =>{
        console.log("Db is not connected");
        console.log(err);
        process.exit(1);
    })
} 

module.exports = dbConnect;