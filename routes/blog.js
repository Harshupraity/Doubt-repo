const express = require("express")
const router= express.Router();

//Import Controller
const {dummyLink} = require("../controllers/likeController")
const {createComment} = require("../controllers/Commentcontroller")





//Mapping Create

router.post("/comments/create",createComment)

// Export
module.exports = router;