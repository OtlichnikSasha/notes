import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getNote, editNote, removeNote, createNote} from "../../api/index";
import { NoteState} from "../../types";

const initialState : NoteState = {
    note: {},
    status: false,
    error: '',
    loading: false
}
interface FetchNoteArgs{
    id: string | undefined
}

export const fetchNote = createAsyncThunk(
    'note/fetchNote',
    async (args: FetchNoteArgs) => {
        return await getNote(args);
    }
)


export const fetchCreateNote = createAsyncThunk(
    'note/fetchCreateNote',
    async (data: object) => {
        return await createNote(data);
    }
)

export const fetchEditNote = createAsyncThunk(
    'note/fetchEditNote',
    async (data: object) => {
        return await editNote(data);
    }
)

export const fetchRemoveNote = createAsyncThunk(
    'note/fetchRemoveNote',
    async (data: FetchNoteArgs) => {
        return await removeNote(data);
    }
)

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // Fetch
            .addCase(fetchNote.pending, state => {
                state.loading = true
            })
            .addCase(fetchNote.fulfilled, (state: NoteState, action) => {
                state.loading = false
                state.note = action.payload.data
                state.status = true
            })
            .addCase(fetchNote.rejected, state => {
                state.loading = false
            })

            // Create
            .addCase(fetchCreateNote.pending, state => {
                state.loading = true
            })
            .addCase(fetchCreateNote.fulfilled, (state: NoteState, action) => {
                state.loading = false
                state.note = action.payload.data
                state.status = true
            })
            .addCase(fetchCreateNote.rejected, state => {
                state.loading = false
            })

            // Edit
            .addCase(fetchEditNote.pending, state => {
                state.loading = true
            })
            .addCase(fetchEditNote.fulfilled, (state: NoteState, action) => {
                state.loading = false
                state.note = action.payload.data
                state.status = true
            })
            .addCase(fetchEditNote.rejected, state => {
                state.loading = false
            })

            // Remove
            .addCase(fetchRemoveNote.pending, state => {
                state.loading = true
            })
            .addCase(fetchRemoveNote.fulfilled, (state: NoteState, action) => {
                state.loading = false
                state.note = action.payload.data
                state.status = true
            })
            .addCase(fetchRemoveNote.rejected, state => {
                state.loading = false
            })

            .addDefaultCase(() => {
            })
    }
})

const { reducer } = noteSlice

export default reducer
