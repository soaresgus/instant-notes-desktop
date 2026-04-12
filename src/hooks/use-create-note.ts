import { createNote } from "@/services/notes.service";
import { useMutation } from "@tanstack/react-query";

export function useCreateNote() {
    return useMutation({
        mutationKey: ["create-note"],
        mutationFn: (content: string) => createNote(content),
        retry: 3
    })
}
