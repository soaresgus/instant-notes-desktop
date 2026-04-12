import { api } from "@/lib/api";

export interface NoteResponse {
    id: string;
    code: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

export async function createNote(content: string): Promise<NoteResponse | null> {
    try {
        const {data} = await api.post<NoteResponse>("/note", { content });

        return data;
    } catch (err) {
        console.error("Failed to create note:", err);
        return null;
    }
}

export async function getNoteByCode(code: string): Promise<NoteResponse | null> {
    try {
        const {data} = await api.get<NoteResponse>(`/note/${code}`);

        return data;
    } catch (err) {
        console.error("Failed to fetch note:", err);
        return null;
    }
}
