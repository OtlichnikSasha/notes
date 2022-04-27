const {Note} = require("../entities")

class NotesController{
    async getNotes(req, res){
        try{
            const notes = await Note.findAll({
                order: [
                    ['id', 'DESC']
                ]
            })
            return res.json(notes)
        }
        catch(e){
            return res.status(500).json({message: e.message})
        }

    }
}

module.exports = new NotesController()
