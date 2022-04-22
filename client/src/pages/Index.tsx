import {FC, useEffect} from 'react';
import {useActions} from "../hooks/useActions";
import {CreateNoteBtn} from "../components/block/CreateNoteBtn";
import {NotesList} from "../components/notesList";

export const Index: FC = () => {
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

