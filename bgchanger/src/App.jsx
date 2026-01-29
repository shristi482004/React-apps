import { useState } from 'react'


export default function App() {
 let [bgClass, setBgClass] = useState("bg-red-500");
  return (
    <>
       <div className={`fixed inset-0 ${bgClass} flex items-center justify-center text-white text-6xl font-black`}>
      BACKGROUND PICKER
    </div>

    <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
  <div
    className={`flex flex-wrap items-center justify-center gap-3 w-max
                px-6 py-5 rounded-full
                bg-white
                bg-opacity-90
                backdrop-blur-md
                border border-white/20
                shadow-2xl`}
  >

    <button
      onClick={() => setBgClass("bg-neutral-950")}
      className="px-5 py-2 rounded-full bg-neutral-950 text-white text-md font-semibold"
    >
      CHARCOAL
    </button>

   

    <button
      onClick={() => setBgClass("bg-blue-900")}
      className="px-5 py-2 rounded-full bg-blue-900 text-white text-md font-semibold"
    >
      OCEAN
    </button>

    <button
      onClick={() => setBgClass("bg-emerald-900")}
      className="px-5 py-2 rounded-full bg-emerald-900 text-white text-md font-semibold"
    >
      FOREST
    </button>

    <button
      onClick={() => setBgClass("bg-rose-900")}
      className="px-5 py-2 rounded-full bg-rose-900 text-white text-md font-semibold"
    >
      WINE
    </button>

    <button
      onClick={() => setBgClass("bg-red-500")}
      className="px-5 py-2 rounded-full bg-red-500 text-white text-md font-semibold"
    >
      CRIMSON
    </button>

 <button
      onClick={() => setBgClass("bg-slate-900")}
      className="px-5 py-2 rounded-full bg-slate-900 text-white text-md font-semibold"
    >
      MIDNIGHT
    </button>
  </div>
</div>

   
    </>
  )
}

