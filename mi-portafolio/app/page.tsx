import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full bg-[hsl(var(--muted))] text-[hsl(var(--accent-foreground))">
      <div className="flex flex-col justify-center-items text-[hsl(var(--primary))]">
        <h1 className="text-4xl font-bold text-[hsl(var(--primary))]">
          Mi Portfolio
        </h1>
        <p className="text-lg text-[hsl(var(--secondary))]">
          Bienvenido a mi portfolio
        </p>
        <button className="px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:brightness-110"></button>
      </div>
    </main>
  );
}
