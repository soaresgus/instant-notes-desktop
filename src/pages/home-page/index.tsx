import { DottedButton } from "@/components/ui/dotted-button";
import { open } from "@tauri-apps/plugin-dialog";
import { readTextFile } from "@tauri-apps/plugin-fs";
import { PlusCircle, LinkIcon, Import } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    const handleImportTxt = async () => {
        try {
            const filePath = await open({
                title: "Select a .txt file to import",
                filters: [{ name: "Text", extensions: ["txt"] }],
                multiple: false
            })

            if (!filePath) return;

            console.log("Selected file:", filePath);
            const text = await readTextFile(filePath);
            console.log("File content:", text);
            navigate("/new-note", { state: { importedText: text } });
        } catch (err) {
            console.error("Failed to import .txt file:", err);
        }
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-zinc-900">
            <section>
                <h1 className="text-3xl font-bold text-center text-white">Welcome to Instant Notes!</h1>
                <p className="text-center text-gray-400">Create quick and practical notes, and if you want, share them!</p>
            </section>

            <section className="grid grid-cols-2 grid-flow-col gap-4">
                <DottedButton className="flex items-center justify-center gap-2" onClick={() => navigate("/new-note")}>
                    <PlusCircle size={24} />
                    <span>Create new note</span>
                </DottedButton>

                <DottedButton className="flex items-center justify-center gap-2" onClick={() => navigate("/public-note")}>
                    <LinkIcon size={24} />
                    <span>Access public note</span>
                </DottedButton>
            </section>

            <section className="flex justify-center">
                <DottedButton className="flex items-center justify-center gap-2" onClick={handleImportTxt}>
                    <Import size={24} />
                    <span>Import from a .txt file</span>
                </DottedButton>
            </section>
        </main>
    );

}
