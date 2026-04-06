import { Link, PlusCircle } from "lucide-react";
import { DottedButton } from "./components/ui/dotted-button";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-zinc-900">
      <section>
        <h1 className="text-3xl font-bold text-center text-white">Welcome to Instant Notes!</h1>
        <p className="text-center text-gray-400">Create quick and practical notes, and if you want, share them!</p>
      </section>

      <section className="grid grid-cols-2 grid-flow-col gap-4">
        <DottedButton className="flex items-center justify-center gap-2">
          <PlusCircle size={24} />
          <span>Create new note</span>
        </DottedButton>

        <DottedButton className="flex items-center justify-center gap-2">
          <Link size={24} />
          <span>Access public note</span>
        </DottedButton>
      </section>
    </main>
  );
}

export default App;
