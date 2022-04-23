import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Editor} from "@tinymce/tinymce-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowLeft, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
interface NoteParams {
    id?: string
}

export const Note: FC = () => {
    const {id}: NoteParams = useParams()
    const {fetchNote, fetchEditNote, fetchRemoveNote} = useActions()
    const {note, loading, status} = useTypedSelector(state => state.note)
    const navigation = useNavigate()
    const [checker, setChecker] = useState(false)
    useEffect(() => {
        fetchNote({id})
    }, [id])

    const changeDataNote = useCallback(() => {
        if (note && !loading) {
            setNoteData({
                ...noteData,
                // @ts-ignore
                id: note.id,
                // @ts-ignore
                name: note.name, noteText: note.noteText
            })
        }
    }, [note])

    useEffect(() => {
        changeDataNote()
    }, [changeDataNote])

    const statusEdit = useCallback(() => {
        if (checker && status && !loading) {
            navigation("/index")
        }
    }, [checker, loading])

    useEffect(() => {
        statusEdit()
    }, [statusEdit])

    const [noteData, setNoteData] = useState({
        id: '',
        name: '',
        noteText: ''
    })
    const editorRef = useRef<any>(null);
    const saveNote = () => {
        fetchEditNote(noteData)
        setChecker(true)
    }
    const writeName = (event: any) => {
        setNoteData({
            ...noteData,
            name: event.target.value
        })
    }

    const writeNoteText = () => {
        setNoteData({
            ...noteData,
            noteText: editorRef.current.getContent()
        })
    }

    const removeNote = () => {
        fetchRemoveNote({id})
        setChecker(true)
    }
    return (
        <div className="container">
            <div className="top_action_place">
                <Link to="/index">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <div className="top_action__right_place">
                    <div onClick={removeNote}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </div>
                    {noteData.name || noteData.noteText ?
                        <div onClick={saveNote}>
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        :
                        <></>
                    }
                </div>
            </div>
            {loading && <div className="preloader_text"/>}
            {
                note && !loading ?
                    <div className="heading_place">
                        <input className="heading_input" placeholder="Заголовок" onChange={writeName}
                               value={noteData.name}/>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            onChange={writeNoteText}
                            initialValue={noteData.noteText}
                            init={{
                                height: 250,
                                menubar: false,
                                plugins: [
                                    'a11ychecker', 'advcode', 'advlist', 'anchor', 'autolink', 'codesample', 'fullscreen', 'help',
                                    'image', 'editimage', 'tinydrive', 'lists', 'link', 'media', 'powerpaste', 'preview',
                                    'searchreplace', 'table', 'template', 'tinymcespellchecker', 'visualblocks', 'wordcount'
                                ],
                                toolbar: 'insertfile a11ycheck undo redo | bold italic | forecolor backcolor | ' +
                                    'template codesample | alignleft aligncenter alignright alignjustify ' +
                                    '| bullist numlist | link image',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                    </div>
                    :
                    <></>
            }
        </div>
    );
};

