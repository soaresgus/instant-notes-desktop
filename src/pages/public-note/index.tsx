import { DottedButton } from "@/components/ui/dotted-button";
import { ArrowLeft, DoorOpen } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function PublicNotePage() {
    const [code, setCode] = useState('')

    const navigate = useNavigate();

    const handleAccessNote = () => {
        if (code.trim() === '') {
            toast.error('Please enter a note code');
            return;
        }
        navigate(`/${code}`);
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-zinc-900">
            <section>
                <h1 className="text-3xl font-bold text-center text-white">Public note</h1>
                <p className="text-center text-gray-400">Write the code for the note you want to access below.</p>
            </section>

            <input
                type="text"
                placeholder="Enter note code..."
                className="w-full max-w-md p-4 rounded-md bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-zinc-300"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />

            <section className="flex gap-4">
                <DottedButton className="flex items-center justify-center gap-2" onClick={() => navigate("/")}>
                    <ArrowLeft size={20} />
                    <span>Back to home</span>
                </DottedButton>

                <DottedButton className="flex items-center justify-center gap-2" onClick={handleAccessNote}>
                    <DoorOpen size={20} />
                    <span>Access note</span>
                </DottedButton>
            </section>
        </main >
    );
}
