const {Note} = require("../entities")

class NoteController{
    async getNote(req, res){
        const {id} = req.query
        console.log('id', id)
        const note = await Note.findOne({
            where: {id}
        })
        return res.json(note)
    }

    async createNote(req, res){
        const {name, noteText} = req.body
        if(!name && !noteText){
            return res.status(400).json({
                message: 'Вы ничего не ввели!',
                status: 'error'
            })
        }
        const note = await Note.create({name, noteText})
        return res.json(note)
    }

    async editNote(req, res){
        const {id, name, noteText} = req.body
        const note = await Note.findOne({
            where: {id}
        })
        if(!note){
            return res.status(400).json({
                message: 'Такой заметки не найдено!',
                status: 'error'
            })
        }
        if(!name && !noteText){
            return res.status(400).json({
                message: 'Вы ничего не ввели!',
                status: 'error'
            })
        }
        note.name = name;
        note.noteText = noteText;
        await note.save()
        return res.json(note)
    }

    async removeNote(req, res){
        const {id} = req.query
        const note = await Note.findOne({
            where: {id}
        })
        if(!note){
            return res.status(400).json({
                message: 'Такой заметки не найдено!',
                status: 'error'
            })
        }
        await note.destroy()
        return res.json({"success": true})
    }
}

module.exports = new NoteController()
