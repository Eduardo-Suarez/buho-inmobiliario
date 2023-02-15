const express = require('express');
const router = express.Router();
const User = require("../models/User.model")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/crear-reseña", (req, res, next) => {
  res.render("creacionReseña");
});
// Get quien somos
router.get("/quienSomos", (req,res,next) => {
  res.render("quienSomos")
})

module.exports = router;
