import {  useEffect, useState,useCallback } from 'react'


function App() {
 const [length, setLength] = useState(6);
   const [numallowed, setNumAllowed] = useState(false);
   const [lowercase, setLowercase] = useState(true);
   const [uppercase, setUppercase] = useState(true);
   const [specialChars, setSpecialChars] = useState(false);
   const [password, setPassword] = useState('');
   const[score,setScore]=useState(0);
   const [copied, setCopied] = useState(false);
  

const generatePassword = useCallback(() => {
  let Str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if(numallowed) Str+="0123456789";
  if(specialChars) Str+="!@#$%^&*()_+~`|}{[]:;?><,./-=";
  if(!lowercase) Str=Str.replace("abcdefghijklmnopqrstuvwxyz","");
  if(!uppercase) Str=Str.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ","");
  
  let pwd="";
  for(let i=0;i<length;i++)
  {
    let index=Math.floor(Math.random()*Str.length);
    pwd+=Str.charAt(index);
  }
  setPassword(pwd);
}, [length, numallowed, lowercase, uppercase, specialChars]);

const setScoreValue = useCallback(() => {
  let score = 0;
  if (uppercase) score += 1;
  if (lowercase) score += 1;
  if (numallowed) score += 1;
  if (specialChars) score += 1;
  if (length >= 12) score += 1;
  setScore(score);
}, [length, numallowed, lowercase, uppercase, specialChars]);

useEffect(() => {
  generatePassword();
  setScoreValue();
}, [generatePassword, setScoreValue]);

const copyToClipboard = useCallback(() => {
  window.navigator.clipboard.writeText(password);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
}, [password]);




  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-4 bg-[#fdfdfd] relative overflow-hidden">
      {/* Background Decorative Blobs - Calmer Tones */}
      <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-teal-100/50 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[45%] h-[45%] bg-sky-100/50 blur-[100px] rounded-full"></div>
      
      <main className="relative z-10 w-full max-w-2xl">
        <header className="text-center mb-2">
          <div className="inline-flex items-center justify-center p-3 mb-4 bg-teal-50 rounded-2xl border border-teal-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-800 mb-3">
            Cipher<span className="text-teal-600">Guard</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base font-light max-w-sm mx-auto">
            Generate safe, complex passwords with a single click. Minimalist and secure.
          </p>
        </header>
         <div
  className="
    w-full max-w-4xl mx-auto
    bg-white rounded-[36px]
    shadow-[0_30px_100px_rgba(15,23,42,0.12)]
    border border-slate-100
    p-10
    scale-[0.93]
    transition-transform
  "
>

      {/* Password Row */}
    <div className="flex items-center gap-4 mb-10">
  {/* Password Input */}
  <div
    className="
      relative flex-1
      bg-slate-50 rounded-2xl
      px-6 py-4
      font-mono text-xl text-slate-800
      flex items-center
      group
      transition-all
      text-wrap overflow-hidden
    "
  >
    <span className="truncate">
      {password || "-"}
    </span>

    {/* Regenerate */}
    <button
      onClick={() => {
        generatePassword();
        
      }}
      className="
        absolute right-3 
        h-10 px-3 rounded-xl
        flex items-center gap-2
        text-slate-400
        bg-transparent
        transition-all duration-300
        hover:bg-teal-50 hover:text-teal-600
        active:scale-95
        group-hover:opacity-100
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 12a8 8 0 018-8 8 8 0 017.8 6" />
        <path d="M20 4v6h-6" />
      </svg>
    </button>
  </div>

  {/* Copy Button */}
  <button
    className={`
      flex items-center gap-2
      px-6 py-4 rounded-2xl
      font-semibold
      border
      transition-all duration-100
      hover:scale-105
      active:scale-95
      ${
        copied
          ? 'bg-teal-700 text-white border-teal-700'
          : 'bg-teal-50 text-teal-600 border-teal-100 hover:bg-teal-100'
      }
    `}
    onClick={copyToClipboard}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 transition-all duration-100 ${
        copied ? 'scale-100' : 'scale-100'
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
    {copied ? 'Copied!' : 'Copy'}
  </button>
</div>

      {/* Security Score */}
      <Scorebar
        length={length}
        upper={uppercase}
        lower={lowercase}
        numbers={numallowed}
        symbols={specialChars}
        password={password}
      />

      {/* Length Slider */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase tracking-widest text-slate-400">
            Length 
          </span>
          <span className="text-teal-600 font-semibold">
            {length}
          </span>
        </div>

        <input
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full accent-teal-500 cursor-pointer"
        />
      </div>

      {/* Toggles */}
      <div className="grid grid-cols-2 gap-8">
        <Toggle
          label="Uppercase"
          desc="Include A-Z"
          enabled={uppercase}
          setEnabled={setUppercase}
        />
        <Toggle
          label="Lowercase"
          desc="Include a-z"
          enabled={lowercase}
          setEnabled={setLowercase}
        />
        <Toggle
          label="Numbers"
          desc="Include 0-9"
          enabled={numallowed}
          setEnabled={setNumAllowed}
        />
        <Toggle
          label="Symbols"
          desc="Include !@#$"
          enabled={specialChars}
          setEnabled={setSpecialChars}
        />
      </div>
    </div>
  
       
        
        <footer className="mt-3 text-center text-slate-400 text-xs font-medium uppercase tracking-[0.2em]">
          End-to-End Privacy • Locally Processed
        </footer>
      </main>
    </div>
    </>
  )
}

export default App





/* ---------------- TOGGLE ---------------- */

function Toggle({ label, desc, enabled, setEnabled }) {
  return (
    <div
      className="flex items-center justify-between
        bg-slate-50 rounded-2xl p-5
        border border-transparent
        transition-all duration-300
        hover:border-teal-200
        hover:bg-teal-50/40
        hover:scale-[1.02]
        active:scale-[0.99]"
    >
      <div>
        <p className="text-slate-800 font-medium hover:text-teal-800">{label}</p>
        <p className="text-sm text-slate-400">{desc}</p>
      </div>

      <button
        onClick={() => setEnabled((prev)=>!prev)}
        className={`w-12 h-6 rounded-full relative
                    transition-all duration-300
                    ${enabled ? "bg-teal-500" : "bg-slate-300"}`}
      >
        <span
          className={`absolute top-1
                      w-4 h-4 rounded-full bg-white shadow
                      transition-all duration-300
                      ${enabled ? "right-1" : "left-1"}`}
        />
      </button>
    </div>
  );
}
    

/* creating a dynamic score bar displaying weak, medium and strong based on the options selected and length of the password */

/* ---------- Length Slider & Toggles ---------- */
function Scorebar({ length, upper, lower, numbers, symbols,password }) {
  let score = 0;
  if (upper) score += 1;
  if (lower) score += 1;
  if (numbers) score += 1;
  if (symbols) score += 1;
  if (length >= 12) score += 1;

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs uppercase tracking-widest text-slate-400">
          Security Score
        </span>
        {score >= 4 ? (
          <div className="text-teal-700 font-semibold">Strong</div>
        ) : score >= 2 ? (
          <div className="text-teal-600 font-semibold">Medium</div>
        ) : (
          <div className="text-teal-500 font-semibold">Weak</div>
        )}
      </div>

      <div className="flex gap-3">
        <div
          className={`h-2 flex-1 rounded-full transition-all duration-300 ${
            score >= 1 && password.length > 0 ? "bg-teal-200" : "bg-slate-100"
          }`}
        />
        <div
          className={`h-2 flex-1 rounded-full transition-all duration-300 ${
            score >= 2 ? "bg-teal-300" : "bg-slate-100"
          }`}
        />
        <div
          className={`h-2 flex-1 rounded-full transition-all duration-300 ${
            score >= 3 ? "bg-teal-400" : "bg-slate-100"
          }`}
        />
        <div
          className={`h-2 flex-1 rounded-full transition-all duration-300 ${
            score >= 4 ? "bg-teal-500" : "bg-slate-100"
          }`}
        />
        
  
      </div>
    </div>
  );
}



 