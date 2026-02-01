import { useState } from "react";

export default function GeneratorCard() {
  const [length, setLength] = useState(12);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(true);

  return (
    <div className="relative mx-auto w-full max-w-xl scale-[0.92]">
      <div
        className="
        rounded-[36px] bg-white
        p-8 md:p-10
        shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)]
        transition-all duration-500
        hover:shadow-[0_40px_120px_-30px_rgba(0,0,0,0.15)]
      "
      >
        {/* PASSWORD FIELD */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative flex-1">
            <input
              readOnly
              value="dj}$wn=:s>."
              className="
                w-full rounded-2xl bg-slate-50 px-5 py-4
                text-lg font-mono text-slate-800
                border border-slate-200
                focus:outline-none
              "
            />

            {/* regenerate */}
            <button
              className="
                absolute right-3 top-1/2 -translate-y-1/2
                h-9 w-9 rounded-xl
                border border-slate-200 bg-white
                flex items-center justify-center
                transition-all
                hover:scale-110 hover:rotate-180 hover:bg-teal-50
                active:scale-95
              "
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12a8 8 0 018-8 8 8 0 017.75 6"
                  stroke="#0f766e"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M20 4v6h-6"
                  stroke="#0f766e"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* COPY */}
          <button
            className="
              flex items-center gap-2 rounded-2xl px-5 py-4
              bg-teal-50 text-teal-700 font-semibold
              border border-teal-200
              transition-all
              hover:bg-teal-100 hover:scale-[1.04]
              active:scale-95
            "
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect
                x="9"
                y="9"
                width="10"
                height="10"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
              <rect
                x="5"
                y="5"
                width="10"
                height="10"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            Copy
          </button>
        </div>

        {/* SECURITY SCORE */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs tracking-widest text-slate-400">
              SECURITY SCORE
            </span>
            <span className="text-sm font-semibold text-teal-600">GOOD</span>
          </div>

          <div className="flex gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full ${
                  i <= 3 ? "bg-teal-400" : "bg-slate-200"
                } transition-all`}
              />
            ))}
          </div>
        </div>

        {/* LENGTH */}
        <div className="mb-10">
          <div className="flex justify-between mb-3">
            <span className="text-xs tracking-widest text-slate-400">
              LENGTH
            </span>
            <span className="font-semibold text-teal-600">{length}</span>
          </div>

          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full accent-teal-500"
          />
        </div>

        {/* TOGGLES */}
        <div className="grid grid-cols-2 gap-6">
          <Toggle label="Uppercase" sub="Include A–Z" state={upper} set={setUpper} />
          <Toggle label="Lowercase" sub="Include a–z" state={lower} set={setLower} />
          <Toggle label="Numbers" sub="Include 0–9" state={numbers} set={setNumbers} />
          <Toggle label="Symbols" sub="Include !@#$" state={symbols} set={setSymbols} />
        </div>
      </div>
    </div>
  );
}

/* ---------- Toggle ---------- */

function Toggle({ label, sub, state, set }) {
  return (
    <button
      onClick={() => set(!state)}
      className="
        flex items-center justify-between
        rounded-2xl p-5
        bg-slate-50 border border-slate-200
        transition-all duration-300
        hover:scale-[1.03] hover:border-teal-300 hover:bg-teal-50
        active:scale-95
      "
    >
      <div>
        <p className="font-semibold text-slate-800">{label}</p>
        <p className="text-sm text-slate-400">{sub}</p>
      </div>

      <div
        className={`relative h-7 w-12 rounded-full transition-all ${
          state ? "bg-teal-500" : "bg-slate-300"
        }`}
      >
        <div
          className={`absolute top-1 left-1 h-5 w-5 rounded-full bg-white
            transition-all duration-300
            ${state ? "translate-x-5" : ""}
          `}
        />
      </div>
    </button>
  );
}
