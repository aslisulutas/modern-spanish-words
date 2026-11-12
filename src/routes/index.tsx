import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { WORDS } from "@/data/words";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Palabra — İspanyolca Kelime Kartları" },
      { name: "description", content: "Modern flashcard'larla İspanyolca kelime öğren: çevir, dinle, ilerlemeni takip et." },
      { property: "og:title", content: "Palabra — İspanyolca Kelime Kartları" },
      { property: "og:description", content: "Modern flashcard'larla İspanyolca kelime öğren." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const KEY = "palabra-known";

function Index() {
  const [order, setOrder] = useState(() => WORDS.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<string>>(new Set());

  useEffect(() => {
    try { setKnown(new Set(JSON.parse(localStorage.getItem(KEY) || "[]"))); } catch { /* ignore */ }
  }, []);
  const save = (s: Set<string>) => { setKnown(s); localStorage.setItem(KEY, JSON.stringify([...s])); };

  const word = WORDS[order[pos]];
  const go = useCallback((d: number) => { setFlipped(false); setPos((p) => (p + d + order.length) % order.length); }, [order.length]);
  const shuffle = () => { const a = [...order]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } setOrder(a); setPos(0); setFlipped(false); };
  const speak = (e: React.MouseEvent) => { e.stopPropagation(); const u = new SpeechSynthesisUtterance(word.es); u.lang = "es-ES"; speechSynthesis.cancel(); speechSynthesis.speak(u); };
  const mark = (k: boolean) => { const s = new Set(known); if (k) s.add(word.es); else s.delete(word.es); save(s); go(1); };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === " ") { e.preventDefault(); setFlipped((f) => !f); }
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h);
  }, [go]);

  const pct = useMemo(() => Math.round((known.size / WORDS.length) * 100), [known]);
  const isKnown = known.has(word.es);

  return (
    <main className="min-h-screen bg-background px-4 py-10 flex flex-col items-center">
      <div className="blob blob-a" /><div className="blob blob-b" />
      <header className="relative w-full max-w-xl flex items-end justify-between">
        <div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">palabra<span className="text-gradient">.</span></h1>
          <p className="text-muted-foreground text-sm">İspanyolca kelime kartları</p>
        </div>
        <div className="text-right">
          <div className="font-display text-2xl font-bold">{known.size}<span className="text-muted-foreground text-base">/{WORDS.length}</span></div>
          <div className="text-xs text-muted-foreground">öğrenildi</div>
        </div>
      </header>
      <div className="relative w-full max-w-xl mt-4 h-2 rounded-full bg-muted overflow-hidden">
        <div className="h-full bg-gradient-sunset transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>

      <div className="relative w-full max-w-xl mt-10 perspective cursor-pointer" onClick={() => setFlipped((f) => !f)}>
        <div className={`flip-inner relative h-80 ${flipped ? "is-flipped" : ""}`}>
          <div className="flip-face absolute inset-0 rounded-[2rem] bg-gradient-sunset shadow-glow p-8 flex flex-col justify-between text-primary-foreground">
            <div className="flex justify-between text-sm opacity-90">
              <span>{pos + 1} / {order.length}</span>
              {isKnown && <span className="rounded-full bg-card/25 px-3 py-0.5">✓ biliyorum</span>}
            </div>
            <div className="text-center">
              <div className="font-display text-5xl sm:text-6xl font-extrabold">{word.es}</div>
              <p className="mt-4 italic opacity-90">“{word.ex}”</p>
            </div>
            <div className="flex justify-between items-center text-sm opacity-90">
              <button onClick={speak} className="rounded-full bg-card/25 hover:bg-card/40 px-4 py-2 transition">🔊 Dinle</button>
              <span>Çevirmek için dokun</span>
            </div>
          </div>
          <div className="flip-face flip-back absolute inset-0 rounded-[2rem] bg-card border border-border shadow-soft p-8 flex flex-col items-center justify-center text-center">
            <span className="text-sm text-muted-foreground">{word.es}</span>
            <div className="font-display text-5xl font-extrabold text-gradient mt-2">{word.tr}</div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-xl mt-8 grid grid-cols-2 gap-3">
        <button onClick={() => mark(false)} className="rounded-2xl border border-border bg-card py-4 font-semibold hover:bg-muted transition">↺ Tekrar et</button>
        <button onClick={() => mark(true)} className="rounded-2xl bg-foreground text-background py-4 font-semibold hover:opacity-90 transition">✓ Biliyorum</button>
      </div>
      <div className="relative w-full max-w-xl mt-3 flex justify-between gap-3">
        <button onClick={() => go(-1)} className="flex-1 rounded-2xl bg-secondary py-3 hover:bg-muted transition">← Geri</button>
        <button onClick={shuffle} className="flex-1 rounded-2xl bg-secondary py-3 hover:bg-muted transition">⤨ Karıştır</button>
        <button onClick={() => go(1)} className="flex-1 rounded-2xl bg-secondary py-3 hover:bg-muted transition">İleri →</button>
      </div>
      <p className="relative mt-6 text-xs text-muted-foreground">Boşluk: çevir · ← →: geçiş</p>
    </main>
  );
}
