const {Note} = require("../entities")

class NoteController{
    async getNote(req, res){
        try{
            const {id} = req.query
            const note = await Note.findOne({
                where: {id}
            })
            return res.json(note)
        }
        catch (e){
            return res.status(500).json({message: e.message})
        }

    }

    async createNote(req, res){
        try{
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
        catch (e){
            return res.status(500).json({message: e.message})
        }
    }

    async editNote(req, res){
        try{
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
        catch (e){
            return res.status(500).json({message: e.message})
        }

    }

    async removeNote(req, res){
        try{
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
        catch(e){
            return res.status(500).json({message: e.message})
        }
    }
}

module.exports = new NoteController()
