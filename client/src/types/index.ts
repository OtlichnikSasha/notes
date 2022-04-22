export interface NotesState{
    notes: NoteEntity[],
    status: boolean | null,
    error: string | null,
    loading: boolean
}

export interface NoteState{
    note: object,
    status: boolean | null,
    error: string | null,
    loading: boolean
}

export interface NoteEntity{
    id?: number,
    name: string,
    noteText: string,
    updatedAt: string
}