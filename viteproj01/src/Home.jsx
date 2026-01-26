import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FocusPreview />
      <WhyTrace />
      <CTA />
      <Footer />
    </main>
  );
}
function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-lg font-semibold tracking-tight">Trace</span>
        <button className="text-sm px-4 py-2 rounded-full bg-neutral-100 text-neutral-900 hover:bg-neutral-200 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}



function HowItWorks() {
  const steps = [
    {
      title: "Observe",
      desc: "Trace quietly learns your study and work rhythms — no timers, no pressure.",
    },
    {
      title: "Understand",
      desc: "Patterns emerge: focus windows, fatigue zones, recovery time.",
    },
    {
      title: "Guide",
      desc: "You get subtle suggestions — when to push, pause, or reset.",
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-16 text-center">
          How Trace Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((s, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800"
            >
              <span className="text-sm text-neutral-400">
                Step {i + 1}
              </span>
              <h3 className="text-2xl mt-2 mb-4">{s.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function FocusPreview() {
  const modes = [
    "Deep Focus — Brown Noise",
    "Light Focus — Soft Instrumentals",
    "Recovery — Nature Ambience",
  ];

  return (
    <section className="py-32 px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-semibold mb-6">
            Focus Mode
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-8">
            Trace doesn’t force focus.  
            It listens — and suggests the kind of sound that supports your
            current mental state.
          </p>

          <ul className="space-y-4">
            {modes.map((m, i) => (
              <li
                key={i}
                className="px-5 py-4 rounded-2xl bg-neutral-800 border border-neutral-700"
              >
                {m}
              </li>
            ))}
          </ul>
        </div>

        <div className="h-80 rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-500">
          Focus Visualization Placeholder
        </div>
      </div>
    </section>
  );
}
function WhyTrace() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Built for people who think deeply
        </h2>
        <p className="text-neutral-400 leading-relaxed text-lg">
          No streaks.  
          No dopamine traps.  
          No artificial urgency.
          <br /><br />
          Trace respects your cognition — and helps you work with it,
          not against it.
        </p>
      </div>
    </section>
  );
}
function CTA() {
  return (
    <section className="py-32 px-6 bg-neutral-900 text-center">
      <h2 className="text-4xl font-semibold mb-6">
        Start understanding how you focus
      </h2>
      <button className="mt-4 px-8 py-4 rounded-full bg-neutral-100 text-neutral-900 text-lg hover:bg-neutral-200 transition">
        Try Trace
      </button>
    </section>
  );
}
function Footer() {
  return (
    <footer className="py-12 text-center text-sm text-neutral-500">
      © {new Date().getFullYear()} Trace. Designed to think quietly.
    </footer>
  );
}
