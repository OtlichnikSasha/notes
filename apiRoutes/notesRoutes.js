const Router = require("express")
const router = new Router()
const notesController = require("../controllers/notesController")

router.get("/", notesController.getNotes)

module.exports = router