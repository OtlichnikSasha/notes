const Router = require("express")
const router = new Router()
const noteRouter = require("./noteRoutes")
const notesRouter = require("./notesRoutes")


router.use("/note", noteRouter)
router.use("/notes", notesRouter)


module.exports = router
