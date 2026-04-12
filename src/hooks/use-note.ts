import { getNoteByCode } from "@/services/notes.service";
import { useQuery } from "@tanstack/react-query";

export function useNote(code: string) {
    return useQuery({
        queryKey: ["note", code],
        queryFn: () => getNoteByCode(code),
        retry: 3,
        enabled: !!code
    })
}
