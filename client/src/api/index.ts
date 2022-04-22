import {api} from "../http/api";

export const getNotes = async (args: object) => {
    const url = `notes`;
    return await api.get(url, args);
}

export const getNote = async (args: object) => {
    const url = `note`;
    return await api.get(url, args);
}

export const createNote = async (data: object) => {
    const url = `note`;
    return await api.post(url, data);
}

export const editNote = async (data: object) => {
    const url = `note`;
    return await api.put(url, data);
}

export const removeNote = async (data: object) => {
    const url = `note`;
    return await api.delete(url, data);
}