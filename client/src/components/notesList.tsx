import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Empty} from "./block/Empty";
import {Link} from "react-router-dom";
import moment from 'moment';

export const NotesList: FC = () => {
    const {notes, loading} = useTypedSelector(state => state.notes)
    return (
        <div className="notes_card_place">
            {loading && <div className="preloader_text"/>}
            {
                !loading && notes.length ? notes.map(note => {
                        return (
                            <Link key={note.id} className="note_card" to={`/note/${note.id}`}>
                                {note.name &&
                                    <div className="note_card__heading">
                                        {note.name}
                                    </div>
                                }
                                <div className="note_card__text" dangerouslySetInnerHTML={{__html: note.noteText}}/>
                                <div className="note_card__date">
                                    {moment(note.updatedAt).format('MMMM Do YYYY, H:MM')}
                                </div>
                            </Link>
                        )
                    })
                    :
                    <Empty loading={loading}/>
            }
        </div>
    );
};

