const express = require('express');
const router = express.Router();
const User = require("../models/User.model")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", {userInSession: req.session.currentUser});
});

router.get("/crear-resena", (req, res, next) => {
  res.render("creacionResena");
});
// Get quien somos
router.get("/quienSomos", (req,res,next) => {
  res.render("quienSomos")
})

router.get("/vista-resena", (req,res,next) => {
  res.render("vistaResenas");
})

module.exports = router;
