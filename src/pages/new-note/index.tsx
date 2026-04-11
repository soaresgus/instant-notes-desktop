import { DottedButton } from "@/components/ui/dotted-button";
import { save } from "@tauri-apps/plugin-dialog";
import { writeTextFile } from "@tauri-apps/plugin-fs";
import { ArrowLeft, FileEdit, UploadCloud } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewNotePage() {
    const navigate = useNavigate();
    const importedText = history.state?.usr?.importedText || '';
    const [text, setText] = useState('')

    async function handleExportTxt() {
        try {
            const filePath = await save({
                title: "Save your note as a .txt file",
                defaultPath: "note.txt",
                filters: [{ name: "Text", extensions: ["txt"] }]
            });

            if (!filePath) return; // usuário cancelou

            await writeTextFile(filePath, text);
            console.log("Arquivo salvo em:", filePath);
        } catch (err) {
            console.error("Falha ao exportar .txt:", err);
        }
    }

    useEffect(() => {
        if (!importedText) return;

        setText(importedText);
    }, [importedText]);

    return (
        <main className="h-screen flex flex-col p-4 gap-6 overflow-hidden bg-zinc-900">
            <section className="flex justify-between">
                <DottedButton className="flex items-center justify-center gap-2 w-fit" onClick={() => navigate("/")}>
                    <ArrowLeft size={20} />
                    <span>Back to home</span>
                </DottedButton>

                <section className="flex gap-2">
                    <DottedButton className="flex items-center justify-center gap-2 w-fit" onClick={handleExportTxt}>
                        <FileEdit size={20} />
                        <span>Export .txt file</span>
                    </DottedButton>

                    <DottedButton className="flex items-center justify-center gap-2 w-fit">
                        <UploadCloud size={20} />
                        <span>Save and publish</span>
                    </DottedButton>
                </section>
            </section>

            <textarea
                placeholder="Write your note here..."
                className="flex-1 min-h-0 w-full p-4 rounded-md overflow-auto bg-zinc-800 text-white resize-none focus:outline-none focus:ring-2 focus:ring-zinc-300"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </main>
    );
}
