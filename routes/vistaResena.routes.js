const {Router} = require("express")
const isLoggedIn = require("../middleware/isLoggedIn")
const Resena = require("../models/Resena")

const router = Router()

//method get
/*router.get("/vista-resena", (req,res) => {
    res.render("vistaResenas")
})*/