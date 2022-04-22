const Router = require("express")
const router = new Router()
const noteController = require("../controllers/noteController")

router.get("/", noteController.getNote)
router.post("/", noteController.createNote)
router.put("/", noteController.editNote)
router.delete("/", noteController.removeNote)


module.exports = router