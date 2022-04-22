import {combineReducers} from "redux";
import noteReducer from "./noteReducer";
import notesReducer from "./notesReducer";



export const rootReducer = combineReducers({
    note: noteReducer,
    notes: notesReducer,
})

export type RootState = ReturnType<typeof rootReducer>