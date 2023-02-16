const {Router} = require("express")

const router = Router()

//get
router.get("/resena", (req,res) => {
    res.render("user/resena")
})

module.exports  = router