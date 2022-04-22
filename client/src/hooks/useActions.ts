import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as NoteReducer from "../store/reducers/noteReducer"
import * as NotesReducer from "../store/reducers/notesReducer"


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({
        ...NoteReducer,
        ...NotesReducer,
    },  dispatch)
}