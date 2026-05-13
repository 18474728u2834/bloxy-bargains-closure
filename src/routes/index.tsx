import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bloxy Bargains Careers — Closed" },
      {
        name: "description",
        content:
          "Bloxy Bargains & RetailPro have gone two different ways. The Bloxy Bargains career website is now closed.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-accent/40 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-destructive" />
          Career site closed
        </span>

        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          Bloxy Bargains <span className="text-muted-foreground">&</span> RetailPro
          <br />
          have gone separate ways.
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          As a result, the Bloxy Bargains career website is permanently closed.
          Thank you to everyone who applied, contributed, and believed in what we
          were building together.
        </p>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          Bargains is falling down with activity, and there's no revival on the
          horizon.
        </p>

        <div className="mt-12 h-px w-24 bg-border" />

        <p className="mt-8 text-sm text-muted-foreground">
          For RetailPro opportunities, visit{" "}
          <a
            href="https://retailpro.space"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            retailpro.space
          </a>
          .
        </p>

        <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
          RetailPro will continue under new management:{" "}
          <span className="font-medium text-foreground">Novavoff</span>,{" "}
          <span className="font-medium text-foreground">Archery</span> &{" "}
          <span className="font-medium text-foreground">Horizonz</span>.
        </p>
      </div>

      <footer className="absolute bottom-6 left-0 right-0 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bloxy Bargains
      </footer>
    </main>
  );
}
