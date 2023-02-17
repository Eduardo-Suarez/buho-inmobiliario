const {Router} = require("express")
const isLoggedIn = require("../middleware/isLoggedIn")
const Resena = require("../models/Resena")

const router = Router()

//Method get
router.get("/resena", isLoggedIn, (req,res) => {
    res.render("user/resena")
})


//Method Post
// POST /auth/signup
router.post("/resena", isLoggedIn, (req, res) => {
    const { category, name, report, calification,} = req.body;
  
    // Check that username, email, and password are provided
    if (category === "" || name === "" || report === "" || calification === "") {
      res.status(400).render("auth/signup", {
        errorMessage:
          "All fields are mandatory. Please provide all the fields",
      });
  
      return;
    }
}
)

module.exports = router