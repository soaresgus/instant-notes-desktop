import { DottedButton } from "@/components/ui/dotted-button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

export default function AccessedNotePage() {
    const navigate = useNavigate();
    const params = useParams();

    return (
        <main className="h-screen flex flex-col p-4 gap-6 overflow-hidden bg-zinc-900">
            <section className="flex justify-between">
                <DottedButton className="flex items-center justify-center gap-2 w-fit" onClick={() => navigate("/")}>
                    <ArrowLeft size={20} />
                    <span>Back to home</span>
                </DottedButton>
            </section>

            <textarea
                value={`Coming Soon... (Note code: ${params.code})`}
                className="flex-1 min-h-0 w-full p-4 rounded-md overflow-auto bg-zinc-800 text-white resize-none focus:outline-none focus:ring-2 focus:ring-zinc-300"
                disabled
            />
        </main>
    )
}
