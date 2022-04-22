import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {Editor} from "@tinymce/tinymce-react";

export const CreateNote: FC = () => {
    useEffect(() => {
        document.title = "Новая заметка"
    }, [])
    const {fetchCreateNote} = useActions()
    const {note, loading, status, error} = useTypedSelector(state => state.note)
    const [noteData, setNoteData] = useState({
        name: '',
        noteText: ''
    })
    const navigation = useNavigate()
    const [checker, setChecker] = useState(false)
    const editorRef = useRef<any>(null);
    const saveNote = () => {
        fetchCreateNote(noteData)
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
    const statusCreate = useCallback(() => {
        if (checker && status && !loading) {
            return navigation("/index")
        }
    }, [checker, loading])

    useEffect(() => {
        statusCreate()
    }, [statusCreate])

    return (
        <div className="container">
            <div className="top_action_place">
                <Link to="/index">
                    <span className="fa fa-arrow-left"/>
                </Link>
                {noteData.name || noteData.noteText ?
                    <div onClick={saveNote}>
                        <i className="fa-solid fa-check"/>
                    </div>
                    :
                    <></>
                }
            </div>
            <div className="heading_place">
                <input className="heading_input" placeholder="Заголовок" onChange={writeName} value={noteData.name}/>
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

        </div>
    );
};

