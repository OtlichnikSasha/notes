import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getNotes} from "../../api/index";
import {NotesState} from "../../types";


const initialState : NotesState = {
    notes: [],
    status: false,
    error: '',
    loading: false
}


export const fetchNotes = createAsyncThunk(
    'notes/fetchNotes',
    async (args: object) => {
        return await getNotes(args);
    }
)

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.pending, state => {
                state.loading = true
            })
            .addCase(fetchNotes.fulfilled, (state: NotesState, action) => {
                state.loading = false
                state.notes = action.payload.data
                state.status = true
            })
            .addCase(fetchNotes.rejected, state => {
                state.loading = false
            })

            .addDefaultCase(() => {
            })
    }
})

const { reducer } = notesSlice

export default reducer
