"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, X, Sparkles, Heart, Feather } from "lucide-react";
import clsx from "clsx";

// --- CONFIGURATION ---
const MESSAGES = [
  {
    id: "today",
    date: "12 Jan 2026",
    title: "To My Savior",
    content: (
      <>
        <p>
          I am profoundly sorry. Not just for the mistakes, but for the silence.
          I hurt you by retreating into my shell, unfairly hoping you would read
          my mind when I should have spoken my heart.
        </p>
        <p className="mt-4">
          This past week, I was drowning in despair. But you... you became my lifeline.
          You didn't have to save me, but you did.
        </p>
        <p className="mt-6 font-medium text-teal-800 italic">
          "You are vibrant, you are grace, and I am simply a pilgrim trying to be worthy of your temple."
        </p>
      </>
    ),
  },
];

export default function VibrantApology() {
  const [selectedId, setSelectedId] = useState(MESSAGES[0].id);
  const [showSecret, setShowSecret] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile to adjust animations
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activeMessage = MESSAGES.find((m) => m.id === selectedId);

  return (
    // MAIN CONTAINER: Gradient Background (Saffron/Gold/Teal)
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 text-slate-800 font-sans overflow-hidden flex flex-col md:flex-row relative">
      
      {/* === BACKGROUND AMBIENCE (Glowing Orbs) === */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-300/20 rounded-full blur-[120px] pointer-events-none" />

      {/* === SIDEBAR (History) === */}
      <div className="w-full md:w-80 bg-white/60 backdrop-blur-md border-b md:border-b-0 md:border-r border-amber-200/50 flex flex-col shrink-0 z-20">
        <div className="p-6 border-b border-amber-100">
          <h1 className="font-serif text-2xl text-teal-900 flex items-center gap-2">
            <BookOpen className="text-amber-600" size={24} />
            <span>Heart's Journal</span>
          </h1>
          <p className="text-xs text-amber-700/60 mt-1 uppercase tracking-widest font-semibold">
            Apologies to Yashi
          </p>
        </div>
        
        {/* Date List */}
        <div className="flex-1 overflow-x-auto md:overflow-y-auto p-4 flex md:flex-col gap-2 no-scrollbar">
          {MESSAGES.map((msg) => (
            <button
              key={msg.id}
              onClick={() => {
                setSelectedId(msg.id);
                setShowSecret(false);
              }}
              className={clsx(
                "whitespace-nowrap md:whitespace-normal flex-shrink-0 text-left p-4 rounded-xl transition-all duration-300 border border-transparent",
                selectedId === msg.id
                  ? "bg-gradient-to-r from-teal-800 to-teal-700 text-white shadow-lg shadow-teal-900/20"
                  : "bg-white/50 hover:bg-white text-slate-600 hover:border-amber-200"
              )}
            >
              <span className={clsx("block text-xs font-bold mb-1", selectedId === msg.id ? "text-teal-200" : "text-amber-600")}>
                {msg.date}
              </span>
              <span className="block font-serif font-medium">
                {msg.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* === MAIN CONTENT AREA === */}
      <main className="flex-1 relative flex items-center justify-center p-6 md:p-12 h-full overflow-y-auto">
        <AnimatePresence mode="wait">
          {!showSecret && activeMessage ? (
            <motion.div
              key={activeMessage.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-full max-w-2xl"
            >
              {/* THE CARD */}
              <div className="bg-white/80 backdrop-blur-xl p-8 md:p-14 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(251,146,60,0.15)] border border-white relative z-10">
                
                {/* Decoration: Peacock Feather Colors at Top */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-teal-500 to-indigo-600" />

                <h2 className="text-3xl md:text-5xl font-serif text-teal-950 mb-8 leading-tight">
                  {activeMessage.title}
                </h2>
                
                <div className="text-lg md:text-xl leading-loose text-slate-700 font-light">
                  {activeMessage.content}
                </div>

                <div className="mt-10 pt-6 border-t border-amber-100 flex justify-between items-end">
                  <div className="text-sm text-amber-800/50 font-serif italic">
                    Forever yours, Manish.
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* === FLOATING ACTION BUTTON (THE "BIRD") === */}
        {/* This stays visible until clicked */}
        <AnimatePresence>
          {!showSecret && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                y: [0, -15, 0], // Float up and down
                rotate: [0, 5, -5, 0] // Gentle wiggle
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => setShowSecret(true)}
              className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 group"
            >
              <div className="relative">
                {/* Glowing Aura */}
                <div className="absolute inset-0 bg-amber-400 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity animate-pulse"></div>
                
                {/* The Button */}
                <div className="bg-gradient-to-tr from-amber-400 to-orange-500 text-white p-5 rounded-full shadow-2xl border-4 border-white/30 cursor-pointer hover:scale-110 transition-transform">
                  <Feather size={32} className="fill-white/20" />
                </div>

                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-teal-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  A Secret Message...
                </div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* === THE SECRET LOVE LETTER (MODAL) === */}
        <AnimatePresence>
          {showSecret && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-teal-950/60 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-[#fffbf0] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative border-8 border-double border-amber-200"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setShowSecret(false)}
                  className="absolute top-4 right-4 text-amber-800/40 hover:text-red-500 transition-colors z-20"
                >
                  <X size={28} />
                </button>

                {/* Content */}
                <div className="p-8 md:p-12 text-center relative">
                  {/* Background Ornament */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
                  
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Sparkles className="inline-block text-amber-500 mb-4 animate-spin-slow" size={40} />
                    <h3 className="text-3xl font-serif font-bold text-teal-900 mb-6">A Prayer of the Heart</h3>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6 text-lg text-teal-800/80 leading-relaxed font-serif"
                  >
                    <p>
                      "My love for you isn't just a fleeting emotion; it is a devotion."
                    </p>
                    <p>
                      You didn't just save my week; you anchored my drifting soul. Like a devotee seeks their deity, I seek your happiness.
                    </p>
                    <p>
                      I wished, in the quietest corner of my heart, that you would choose me—not just for now, but as your eternal companion.
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-rose-600 mt-4 block">
                      I am madly, crazily, and spiritually in love with you.
                    </p>
                  </motion.div>

                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="mt-8 flex justify-center"
                  >
                    <Heart className="fill-rose-500 text-rose-500 drop-shadow-xl animate-pulse" size={56} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}