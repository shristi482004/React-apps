export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A0D12] to-[#151A22] px-6 py-24">
      <div className="relative max-w-3xl text-center space-y-10">

        {/* Ambient focus glow */}
        <div className="absolute inset-0 -z-10 rounded-full bg-white/25 blur-[140px]" />

        {/* Product name */}
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">
          Trace
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
          Understand how you learn. <br className="hidden md:block" />
          Not just how much you do.
        </p>

        {/* Description */}
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
          Trace quietly observes your study and work patterns, revealing insights
          that help you focus better and learn smarter — without pressure, noise,
          or gamification.
        </p>

        {/* CTA */}
        <div className="pt-6">
          <button className="px-8 py-3 rounded-full bg-white text-black font-medium transition-all duration-300 hover:scale-[1.03] hover:bg-gray-100">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}
