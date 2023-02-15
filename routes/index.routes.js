const express = require('express');
const router = express.Router();
const User = require("../models/User.model")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/contacto", (req,res,next) => {
  res.render("quienSomos")
})

module.exports = router;
