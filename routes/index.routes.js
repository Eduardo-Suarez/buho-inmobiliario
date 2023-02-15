const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/crear-reseña", (req, res, next) => {
  res.render("creacionReseña");
});

module.exports = router;
