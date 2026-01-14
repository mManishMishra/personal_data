"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  X, 
  Sparkles, 
  Heart, 
  Pause, 
  Play, 
  Hand, 
  SkipForward, 
  SkipBack, 
  AlertTriangle,
  Library,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import clsx from "clsx";

// --- CUSTOM COMPONENTS ---

const PeacockFeatherIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 140 Q50 80 50 10" stroke="#d97706" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="50" cy="40" rx="25" ry="35" fill="#fcd34d" opacity="0.6" />
    <ellipse cx="50" cy="40" rx="18" ry="25" fill="#0d9488" />
    <ellipse cx="50" cy="45" rx="10" ry="14" fill="#1e3a8a" />
    <path d="M50 10 L20 30" stroke="#15803d" strokeWidth="1" opacity="0.6" />
    <path d="M50 15 L80 30" stroke="#15803d" strokeWidth="1" opacity="0.6" />
    <path d="M50 25 L15 50" stroke="#15803d" strokeWidth="1" opacity="0.6" />
    <path d="M50 25 L85 50" stroke="#15803d" strokeWidth="1" opacity="0.6" />
  </svg>
);

const KrishnaFlute = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <path d="M10 30 L190 30" stroke="#d97706" strokeWidth="8" strokeLinecap="round" filter="url(#glow)" />
    <path d="M10 30 L190 30" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
    <circle cx="40" cy="30" r="3" fill="#451a03" />
    <circle cx="60" cy="30" r="3" fill="#451a03" />
    <circle cx="80" cy="30" r="3" fill="#451a03" />
    <circle cx="100" cy="30" r="3" fill="#451a03" />
    <circle cx="120" cy="30" r="3" fill="#451a03" />
    <circle cx="140" cy="30" r="3" fill="#451a03" />
    <path d="M180 30 Q180 50 190 55" stroke="#ef4444" strokeWidth="2" />
    <circle cx="190" cy="55" r="2" fill="#ef4444" />
  </svg>
);

const FallingPetals = () => {
  const petals = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
      {petals.map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -50, opacity: 0, rotate: 0 }}
          animate={{ 
            y: "100vh", opacity: [0, 1, 0], rotate: [0, 360], x: [0, Math.random() * 100 - 50] 
          }}
          transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 2 }}
          className="absolute text-rose-500/80 text-2xl drop-shadow-sm"
          style={{ left: `${Math.random() * 100}%` }}
        >
          ✿
        </motion.div>
      ))}
    </div>
  );
};

// --- DATA: THE STORY CHAPTERS ---
const STORY_CHAPTERS = [
  {
    title: "The New Girl",
    text: "It was Class 6. I had just transferred to the new branch, of our school. Then, you walked in as late joinee. You took the first bench, right row, right side, sitting next to Shobha and another girl. I used to look at you admire you from distance. Had a teacher who once caught me staring at you and scolded me! It was the beginning of my crush on you."
  },
  {
    title: "The Unattainable Star",
    text: "You were the Topper. You didn't even seem to try hard, yet you were brilliant. You were confident, great at Kho-Kho, and fearless. I was just a boy admiring you from a distance. Truth be told? Everyone had a crush on you."
  },
  {
    title: "Card Cricket Wars",
    text: "We were stupid kids. We used to play 'Card Cricket' in class, betting on random things. But the biggest prize? Whoever won the match 'got' you. It was silly, but I fought those card battles like I was fighting for a kingdom. I just wanted to be associated with you, even in a game."
  },
  {
    title: "The Khaki Shorts Crisis",
    text: "I was so intimidated by how cool you were that my own uniform embarrassed me. I hated wearing those khaki shorts in front of you. I literally went on strike at home! I told my mom: 'I am NOT going to school until I get full pants!' just so I could look like a gentleman for you."
  },
  {
    title: "The Front Bench War",
    text: "In Class 7, you sat right in front of me. We were friends now, but you had a crush on someone else. It made me so jealous! It started a silent war between me and him. I used to take your copies & files home just to hold something of yours and admire you through it . And remember that guy who shoulder-rubbed you? I fought him. Because even if you liked someone else, I was the one protecting you(In my own weird way!)."
  },
  {
    title: "The Kabaddi Miracle",
    text: "I’m fuzzy on if this was 7th or 8th, but my heart remembers clearly. It was sunny afternoon we were out in ground right next to end of corridor. You were playing Kabaddi and we were against each other . It might have been embarrassing for you, but for me it was the closest i had you !!! you ran into me... and for a moment everything stopped , I held you. My only hug. I dream of that. I crave for it ... I want you to run to me again, and this time, I will catch you and never let you go."
  }
];

const PLAYLIST = [
  { id: "fBFFlL58UTM", title: "Fairytale", emotion: "POV: Me in 2013, realizing I'm in love with a fairytale." },
  { id: "2Vv-BfVoq4g", title: "Perfect", emotion: "Because we were just kids when we fell in love..." },
  { id: "rtOvBOTyX00", title: "A Thousand Years", emotion: "For the years we were apart, my heart never changed." },
];

const MESSAGES = [
  {
    id: "main",
    date: "12 Jan 2026",
    title: "To My Healer",
    icon: <Heart size={16} />,
    content: (
      <>
        <p>I am profoundly sorry. You healed me all last week, took me out of my despair, and instead of just being happy, I got scared. I overthought "how you might feel" and tried to distance myself.</p>
        <p className="mt-4">I know it made you mad. It should have. I was being an idiot who ran away when he should have stayed.</p>
        <p className="mt-6 font-medium text-teal-900 italic border-l-4 border-amber-400 pl-4">"Like a flute is hollow without breath, I am just noise without your calm."</p>
      </>
    ),
  },
  {
    id: "our_story",
    date: "Class 6 Diaries",
    title: "How It Started",
    icon: <Library size={16} />,
    isStory: true, // TRIGGERS STORY MODE
  },
  {
    id: "slap_protocol",
    date: "The Fix",
    title: "The 'Blue House Captain' Protocol",
    icon: <Hand size={16} />,
    isInteractive: true,
  },
];

export default function UltimateApology() {
  const [selectedId, setSelectedId] = useState(MESSAGES[0].id);
  const [showTease, setShowTease] = useState(false);   
  const [showSecret, setShowSecret] = useState(false); 
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = PLAYLIST[currentSongIndex];

  const [slapCount, setSlapCount] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  // STORY MODE STATE
  const [storyIndex, setStoryIndex] = useState(0);

  const activeMessage = MESSAGES.find((m) => m.id === selectedId);

  // --- HANDLERS ---
  const handleSlap = () => {
    setSlapCount((prev) => prev + 1);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 300);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % PLAYLIST.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#FFF8E1] via-[#E0F2F1] to-[#E0F7FA] text-slate-800 font-sans overflow-hidden flex flex-col md:flex-row relative">
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] pointer-events-none" />

      {/* SIDEBAR */}
      <div className="w-full md:w-80 bg-teal-950/90 backdrop-blur-md flex flex-col shrink-0 z-20 shadow-2xl">
        <div className="p-6 border-b border-teal-800 bg-teal-900/50">
          <h1 className="font-serif text-2xl text-amber-400 flex items-center gap-2">
            <BookOpen size={24} />
            <span>Soul Journal</span>
          </h1>
          <p className="text-xs text-teal-300 mt-1 uppercase tracking-widest font-semibold">For Yashi</p>
        </div>
        <div className="flex-1 overflow-x-auto md:overflow-y-auto p-4 flex md:flex-col gap-2 no-scrollbar">
          {MESSAGES.map((msg) => (
            <button
              key={msg.id}
              onClick={() => { setSelectedId(msg.id); setShowTease(false); setShowSecret(false); setStoryIndex(0); }}
              className={clsx(
                "whitespace-nowrap md:whitespace-normal flex-shrink-0 text-left p-4 rounded-xl transition-all duration-300 border-l-4",
                selectedId === msg.id ? "bg-teal-900 border-amber-400 text-white shadow-lg" : "bg-teal-900/30 text-teal-200 border-transparent hover:bg-teal-900/50"
              )}
            >
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400/80 mb-1">{msg.icon} {msg.date}</div>
              <span className="block font-serif font-medium">{msg.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* MAIN STAGE */}
      <main className="flex-1 relative flex items-center justify-center p-6 md:p-12 h-full overflow-y-auto">
        <AnimatePresence mode="wait">
          {!showSecret && !showTease && activeMessage ? (
            <motion.div
              key={activeMessage.id}
              animate={isShaking ? { x: [-10, 10, -10, 10, 0], rotate: [-2, 2, -2, 2, 0] } : { opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: isShaking ? 0.3 : 0.8 }}
              className="relative w-full max-w-2xl z-10 pb-32 md:pb-0"
            >
              <motion.div initial={{ y: -10, opacity: 0 }} animate={{ y: [0, -10, 0], opacity: 1 }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-12 left-1/2 -translate-x-1/2 z-0">
                <KrishnaFlute className="w-48 h-16 drop-shadow-lg opacity-80" />
              </motion.div>

              <div className="bg-white/70 backdrop-blur-xl p-8 md:p-14 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(13,148,136,0.2)] border border-white relative overflow-hidden min-h-[400px] flex flex-col justify-center">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-teal-500 to-blue-600" />
                
                {activeMessage.isStory ? (
                  // === STORY MODE ===
                  <div className="relative">
                    <div className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                       <Library size={14} /> Chapter {storyIndex + 1} of {STORY_CHAPTERS.length}
                    </div>
                    <motion.div
                      key={storyIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-3xl md:text-4xl font-serif text-teal-950 mb-6">{STORY_CHAPTERS[storyIndex].title}</h2>
                      <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">{STORY_CHAPTERS[storyIndex].text}</p>
                    </motion.div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-8 pt-6 border-t border-amber-100">
                      <button 
                        onClick={() => setStoryIndex(i => Math.max(0, i - 1))}
                        disabled={storyIndex === 0}
                        className="px-4 py-2 rounded-full border border-teal-200 text-teal-700 disabled:opacity-30 hover:bg-teal-50 flex items-center gap-2 transition-all"
                      >
                        <ArrowLeft size={16} /> Prev
                      </button>
                      <button 
                        onClick={() => setStoryIndex(i => Math.min(STORY_CHAPTERS.length - 1, i + 1))}
                        disabled={storyIndex === STORY_CHAPTERS.length - 1}
                        className="px-6 py-2 rounded-full bg-teal-800 text-white disabled:opacity-50 disabled:bg-slate-400 hover:bg-teal-900 flex items-center gap-2 shadow-lg transition-all ml-auto"
                      >
                        Next Chapter <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                ) : activeMessage.isInteractive ? (
                  // === SLAP MODE ===
                  <div className="space-y-6 relative z-10">
                    <p className="text-lg text-slate-700 leading-relaxed">I admit it. I distanced myself because I felt I wasn't enough, just like back in school.</p>
                    <p className="text-lg text-slate-700 leading-relaxed">You are the <strong>Vibrant Girl</strong> I always chased. The Topper who shared her files just to help us. But my most precious memory is when you hopped onto my bus—just for fun, to see my village.</p>
                    <p className="text-lg text-slate-700 leading-relaxed">You are the <strong>Blue House Captain</strong>. The Head Girl. The one who used to grab my hand and drag me to morning assembly.</p>
                    <p className="font-bold text-teal-800">I need you to do that again. When I try to run, don't let me. Just drag me back. Or... just slap some sense into me.</p>
                    <div className="mt-8 p-6 bg-rose-50 rounded-2xl border-2 border-rose-100 flex flex-col items-center gap-4">
                      <div className="text-sm font-bold text-rose-400 uppercase tracking-widest">Overthinking Neutralizer</div>
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={handleSlap} className="px-8 py-4 bg-rose-500 text-white font-bold text-xl rounded-full shadow-xl hover:bg-rose-600 active:bg-rose-700 transition-colors flex items-center gap-2">
                        <Hand size={24} /> 👋 SLAP ME!
                      </motion.button>
                      <div className="text-rose-800 font-mono font-bold">Sense Slapped Into Me: {slapCount} times</div>
                    </div>
                    <AnimatePresence>{isShaking && (<motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1.5, opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-black text-red-600 z-50 pointer-events-none" style={{ textShadow: "2px 2px 0px white" }}>POW! 💥</motion.div>)}</AnimatePresence>
                  </div>
                ) : (
                  // === STANDARD CONTENT ===
                  <>
                    <h2 className="text-3xl md:text-5xl font-serif text-teal-950 mb-6 relative z-10">{activeMessage.title}</h2>
                    <div className="text-lg md:text-xl leading-loose text-slate-700 font-light relative z-10">{activeMessage.content}</div>
                  </>
                )}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* MUSIC PLAYER */}
        <div className="fixed bottom-6 left-6 md:bottom-12 md:left-12 z-50 flex items-end gap-2 max-w-[80vw] md:max-w-none">
          <motion.div initial={{ width: 64 }} animate={{ width: isPlaying ? "auto" : 64 }} className="bg-white/90 backdrop-blur-md rounded-full shadow-2xl border-2 border-rose-100 p-2 flex items-center overflow-hidden">
            <button onClick={() => setIsPlaying(!isPlaying)} className={clsx("w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors", isPlaying ? "bg-rose-500 text-white animate-spin-slow" : "bg-slate-100 text-slate-600")}>
              {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="currentColor ml-1" />}
            </button>
            {isPlaying && (
              <div className="flex items-center gap-4 px-4 pr-6">
                <div className="flex flex-col min-w-[120px] md:min-w-[200px]">
                  <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">Now Playing</span>
                  <span className="font-serif font-bold text-slate-800 truncate">{currentSong.title}</span>
                  <motion.span key={currentSongIndex} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-slate-500 italic truncate max-w-[120px] md:max-w-[200px]">{currentSong.emotion}</motion.span>
                </div>
                <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
                  <button onClick={prevSong} className="p-2 hover:bg-slate-100 rounded-full text-slate-500"><SkipBack size={16} /></button>
                  <button onClick={nextSong} className="p-2 hover:bg-slate-100 rounded-full text-slate-500"><SkipForward size={16} /></button>
                </div>
              </div>
            )}
          </motion.div>
          {isPlaying && (<div className="hidden"><iframe width="100%" height="100" src={`https://www.youtube.com/embed/${currentSong.id}?autoplay=1&loop=1&playlist=${currentSong.id}`} title="Music" allow="autoplay" /></div>)}
        </div>

        {/* FLOATING FEATHER */}
        <AnimatePresence>
          {!showSecret && !showTease && (
            <motion.div className="fixed top-6 right-6 md:top-12 md:right-12 z-50 cursor-pointer" onClick={() => setShowTease(true)} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <div className="relative group">
                <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-30 animate-pulse" />
                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-b from-teal-900 to-slate-900 rounded-full border-4 border-amber-400 shadow-2xl flex items-center justify-center overflow-hidden">
                  <PeacockFeatherIcon className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg" />
                </div>
                <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-xs font-bold text-teal-900 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Open My Heart</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TEASE & SECRET MODALS (Same as before) */}
        <AnimatePresence>
          {showTease && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-teal-950/80 backdrop-blur-sm">
              <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="bg-[#fffbf0] w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative border-4 border-amber-400 p-8 text-center">
                 <div className="mb-4"><AlertTriangle className="inline-block text-amber-500 animate-bounce" size={48} /></div>
                 <h3 className="text-2xl font-serif font-bold text-teal-950 mb-4">⚠️ Wait a minute, Yashi!</h3>
                 <p className="text-slate-700 leading-relaxed mb-8">Behind this feather lies a confession so honest it is known to cause extreme blushing, butterflies, and sudden smiling.<br/><br/><strong>Are you absolutely sure you are in a safe, private location to view this?</strong></p>
                 <div className="flex flex-col gap-3">
                   <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => { setShowTease(false); setShowSecret(true); }} className="w-full py-3 bg-rose-500 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2"><Heart fill="currentColor" size={18} /> Yes, I'm brave. Show me.</motion.button>
                   <button onClick={() => setShowTease(false)} className="w-full py-3 text-slate-500 font-medium hover:bg-slate-100 rounded-xl transition-colors">No, I'm not ready to blush yet.</button>
                 </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showSecret && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-teal-950/80 backdrop-blur-sm">
              <FallingPetals />
              <motion.div initial={{ scale: 0.8, y: 50, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.8, y: 50, opacity: 0 }} className="bg-[#fffbf0] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative border-4 border-amber-300">
                <button onClick={() => setShowSecret(false)} className="absolute top-4 right-4 text-amber-800/40 hover:text-rose-500 z-20"><X size={28} /></button>
                <div className="p-8 md:p-12 text-center relative z-10">
                  <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                    <Sparkles className="inline-block text-amber-500 mb-4 animate-spin-slow" size={32} />
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-teal-900 mb-2">My Eternal Prayer</h3>
                    <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mb-6"></div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="space-y-6 text-lg text-teal-900/80 leading-relaxed font-serif">
                    <p>"It wasn't just Class 6. It was every moment since. Through the years of separation, my compass only ever pointed one way—towards you."</p>
                    <p>You aren't just my past crush or my present healer. You are my inevitable future. I wished, deep down, that you would choose me again.</p>
                     <p>You are my fairytale coming true. Just promise you'll keep dragging me to morning assembly (and through life) whenever I get lost.</p>
                    <p className="text-xl md:text-3xl font-bold text-rose-600 mt-8 block transform scale-105">I am madly, crazily, and spiritually in love with you.</p>
                  </motion.div>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }} className="mt-8 flex justify-center"><Heart className="fill-rose-500 text-rose-500 drop-shadow-xl animate-pulse" size={48} /></motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}