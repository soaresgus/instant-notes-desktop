import { Button } from "@/components/ui/button";

function App() {
  return (
    <main className="min-h-screen bg-background">
      <section className="container flex min-h-screen max-w-3xl flex-col items-start justify-center gap-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Instant Notes (Desktop)</p>
          <h1 className="text-3xl font-semibold tracking-tight">Hello World</h1>
          <p className="text-muted-foreground">
            Hi Mom!
          </p>
        </div>

        <div className="flex gap-3">
          <Button>Example Default</Button>
          <Button variant="outline">Example Outline</Button>
        </div>
      </section>
    </main>
  );
}

export default App;
