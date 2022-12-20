import {useEffect} from 'react';
import {useActions} from "../hooks/useActions";
import {CreateNoteBtn} from "../components/block/CreateNoteBtn";
import {NotesList} from "../components/notesList";

const Index = () => {
    useEffect(() => {
        fetchNotes({})
        document.title = "Заметки"
    }, [])
    const {fetchNotes} = useActions()
    return (
        <div className="container">
             <CreateNoteBtn/>
            <NotesList/>
        </div>
    );
};

export default Index;
