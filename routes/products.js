const express = require('express');
const router=express.router();
router.route("/".get)(about);
router.route("/testing").get(about);
module.exports=router;
