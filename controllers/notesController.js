const {Note} = require("../entities")

class NotesController{
    async getNotes(req, res){
        const notes = await Note.findAll({
            order: [
                ['id', 'DESC']
            ]
        })
        return res.json(notes)
    }
}

module.exports = new NotesController()
