import React, { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Phone, MapPin, Calendar, Clock, X, Music, VolumeX } from "lucide-react";

/**
 * Premium Sri Lankan Engagement Invitation Theme
 * Names: Naween & Nadeesha
 * Background: Cream/Sand
 * Accents: Green/Brown
 */

const mandalaImage = "/images/floral_wreath.jpg";
const centerImage = "/images/floral_wreath.jpg";

function FloatingPetals() {
  const petals = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 12 + Math.random() * 10,
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
    })), []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-theme-200/20"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.2,
            borderRadius: "50% 5% 50% 5%",
            rotate: p.rotation
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: [0, 1200], opacity: [0, 0.5, 0], rotate: p.rotation + 360 }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

export default function EngagementInvitation() {
  const [isOpened, setIsOpened] = useState(false);
  const [rsvpName, setRsvpName] = useState("");
  const [attendance, setAttendance] = useState<"attending" | "declined" | null>(null);
  const [guests, setGuests] = useState(1);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName || !attendance) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setRsvpSubmitted(true);
    }, 1200);
  };

  return (
    <main className="h-[100dvh] w-full bg-brown-dark overflow-hidden relative flex items-center justify-center font-montserrat">
      <FloatingPetals />
      
      <audio ref={audioRef} src="/hetaka-mangala-mudu-da-mahiru-senarathne-yashodha-medagedara.mp3" loop />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="envelope-stage"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.1,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="flex flex-col items-center justify-center p-6 relative z-10 w-full"
          >
            {/* Title */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
              <span className="inline-block px-5 py-2 rounded-full bg-brown-base border border-theme-500/20 text-[10px] uppercase tracking-[0.5em] text-theme-600 font-bold mb-6">
                Save the Date
              </span>
              <h1 className="font-cinzel text-4xl md:text-5xl text-theme-900 mb-4 tracking-tight">
                Nadith & Gayathri
              </h1>
              <p className="text-theme-600 text-sm tracking-[0.2em] font-light">OCTOBER 16, 2026</p>
            </motion.div>

            {/* Gatefold Envelope */}
            <div
              className="relative w-full max-w-[400px] aspect-[1/1.4] flex items-center justify-center group cursor-pointer perspective-1000"
              onClick={() => {
                setIsOpened(true);
                if (audioRef.current) {
                  audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log("Audio autoplay blocked", e));
                }
              }}
            >
              <div className="absolute inset-0 bg-brown-base rounded-xl shadow-2xl border border-theme-500/20 overflow-hidden" />

              {/* Left Flap */}
              <motion.div
                className="absolute inset-y-0 left-0 w-1/2 bg-brown-base z-20 shadow-[5px_0_15px_rgba(0,0,0,0.3)] origin-left flex items-center justify-end pr-4 overflow-hidden"
                whileHover={{ rotateY: -10 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div 
                  className="absolute top-0 bottom-0 left-0 w-[200%] bg-cover bg-center z-0"
                  style={{ backgroundImage: `url('/ChatGPT%20Image%20Sep%201,%202026,%2004_10_34%20AM.png')` }}
                />
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-0" />
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-theme-400/30 z-10" />

                <div className="text-theme-200/40 rotate-90 whitespace-nowrap text-xs tracking-[0.5em] uppercase font-bold relative z-10">
                  NADITH & GAYATHRI
                </div>
              </motion.div>

              {/* Right Flap */}
              <motion.div
                className="absolute inset-y-0 right-0 w-1/2 bg-brown-base z-20 shadow-[-5px_0_15px_rgba(0,0,0,0.3)] origin-right flex items-center justify-start pl-4 overflow-hidden"
                whileHover={{ rotateY: 10 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div 
                  className="absolute top-0 bottom-0 right-0 w-[200%] bg-cover bg-center z-0"
                  style={{ backgroundImage: `url('/ChatGPT%20Image%20Sep%201,%202026,%2004_10_34%20AM.png')` }}
                />
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-0" />
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-theme-400/30 z-10" />
              </motion.div>

              {/* The Seal Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-24 h-24 rounded-full bg-gradient-to-br from-theme-200 via-theme-100 to-theme-300 shadow-2xl border-4 border-[#3d2a25] flex items-center justify-center group-hover:shadow-theme-500/20"
              >
                <div className="text-center">
                  <p className="font-cinzel text-2xl font-bold text-[#3d2a25] leading-none">N&G</p>
                  <div className="h-px w-10 bg-[#3d2a25]/30 mx-auto my-1.5" />
                  <p className="text-[8px] uppercase tracking-[0.3em] font-bold text-[#3d2a25]">Open</p>
                </div>
              </motion.div>

              {/* Card Preview inside (Mandala) */}
              <div className="absolute inset-10 opacity-30 flex items-center justify-center">
                <img src={mandalaImage} alt="" className="w-full h-auto animate-spin-slow mix-blend-multiply" style={{ animationDuration: '20s' }} />
              </div>
            </div>

            <p className="mt-8 text-[11px] uppercase tracking-[0.6em] text-theme-500 font-bold animate-pulse">
              Tap to Reveal
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="card-stage"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2 sm:p-4"
          >
            {/* The Main Card */}
            <div className="relative w-full max-w-[480px] h-[92vh] bg-brown-base shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-2xl border-[6px] md:border-[10px] border-theme-500/80 flex flex-col text-theme-900 overflow-hidden">
              
              {/* Top fixed close button */}
              <button
                onClick={() => {
                  setIsOpened(false);
                  if (audioRef.current) {
                    audioRef.current.pause();
                    setIsPlaying(false);
                  }
                }}
                className="absolute top-3 right-3 z-50 p-1.5 rounded-full border border-theme-500/20 text-theme-700 hover:text-theme-500 hover:border-theme-500/50 bg-brown-base/80 backdrop-blur-sm transition-all duration-300"
                title="Return to envelope"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Top fixed audio toggle button */}
              <button
                onClick={toggleAudio}
                className="absolute top-3 left-3 z-50 p-1.5 rounded-full border border-theme-500/20 text-theme-700 hover:text-theme-500 hover:border-theme-500/50 bg-brown-base/80 backdrop-blur-sm transition-all duration-300"
                title={isPlaying ? "Mute music" : "Play music"}
              >
                {isPlaying ? <Music className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* Full Background Image */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('/ChatGPT%20Image%20Sep%201,%202026,%2004_23_03%20AM.png')` }}
              />

              {/* No-Scroll Container */}
              <div className="flex-1 overflow-hidden p-2 sm:p-4 relative text-center flex flex-col justify-between z-10">
                
                {/* Background Textures */}
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                {/* Content Sections */}
                <div className="flex flex-col items-center justify-center space-y-2 md:space-y-3 relative z-10 w-full h-full">
                  
                  {/* Top Mandala */}
                  {/* <img src={mandalaImage} alt="Mandala" className="w-10 h-10 md:w-12 md:h-12 object-contain mb-1 mx-auto mix-blend-multiply" /> */}

                  {/* Names Section */}
                  <div className="flex flex-col items-center justify-center space-y-1.5 mt-32 sm:mt-40">
                    
                    <div className="text-center space-y-0.5">
                      <p className="text-[6px] md:text-[7px] tracking-[0.2em] font-medium text-theme-600 uppercase">Loving son of</p>
                      <p className="text-[7px] md:text-[8px] font-cinzel text-theme-800 uppercase tracking-widest">Mr. & Mrs. Senevirathne</p>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-playball text-theme-900 leading-none py-1 drop-shadow-sm">Nadith</h2>

                    <div className="flex items-center justify-center gap-3 w-full">
                      <div className="h-[0.5px] w-8 bg-gradient-to-r from-transparent to-theme-500"></div>
                      <span className="text-lg md:text-xl font-playball text-theme-500 leading-none">&</span>
                      <div className="h-[0.5px] w-8 bg-gradient-to-l from-transparent to-theme-500"></div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-playball text-theme-900 leading-none py-1 drop-shadow-sm">Gayathri</h2>

                    <div className="text-center space-y-0.5">
                      <p className="text-[6px] md:text-[7px] tracking-[0.2em] font-medium text-theme-600 uppercase mt-1">Loving daughter of</p>
                      <p className="text-[7px] md:text-[8px] font-cinzel text-theme-800 uppercase tracking-widest">Mr. & Mrs. Gunawardane</p>
                    </div>

                  </div>

                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-theme-500/50 to-transparent mx-auto" />

                  {/* Invitation Text */}
                  <div className="space-y-0.5 max-w-[320px] mx-auto">
                    <p className="text-[7px] md:text-[9px] tracking-widest font-semibold text-theme-600 uppercase">Together with their families</p>
                    <p className="text-[7px] md:text-[8px] italic text-theme-600/90 font-serif leading-relaxed">
                      joyfully invite you to celebrate their engagement
                    </p>
                  </div>

                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-theme-500/50 to-transparent mx-auto" />

                  {/* Date Section */}
                  <div className="space-y-1.5 md:space-y-2">
                    <div className="flex flex-col items-center">
                      <p className="text-[8px] md:text-[9px] font-cinzel tracking-[0.2em] font-bold text-theme-600 uppercase">FRIDAY</p>
                      <p className="text-xl md:text-3xl font-cinzel text-theme-500 leading-none my-0.5 font-bold">16</p>
                      <p className="text-[8px] md:text-[9px] font-cinzel tracking-[0.2em] font-bold text-theme-600 uppercase">October 2026</p>
                    </div>

                    <div className="space-y-0.5">
                      <h3 className="text-[10px] md:text-sm font-cinzel tracking-wider text-theme-900 uppercase font-bold">Sevonlak Hotel, Divulapitiya</h3>
                    </div>

                    <div className="flex flex-col items-center gap-0.5">
                      <div className="flex items-center justify-center gap-1.5 text-[7px] md:text-[8px] font-semibold tracking-widest text-theme-700">
                        <Clock className="w-3 h-3 text-theme-500" />
                        <span>09:30AM - 04:00PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Location Connection Link */}
                  <div className="pt-1 w-full max-w-[240px] mx-auto">
                    <a
                      href="https://maps.app.goo.gl/S4dggMbJNLTAqFJeA?g_st=ic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg border border-theme-500/40 text-theme-500 hover:bg-theme-500 hover:text-brown-base transition-all duration-300 font-semibold tracking-[0.1em] text-[8px] uppercase shadow-md shadow-theme-500/5 hover:shadow-theme-500/20"
                    >
                      <MapPin className="w-3 h-3" />
                      View Location on Maps
                    </a>
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-theme-500/30 to-transparent my-1 mx-auto" />

                  {/* RSVP Section */}
                  <div className="w-full max-w-[280px] space-y-2 pt-1 mx-auto">
                    <div className="text-center space-y-0.5">
                      <h4 className="font-cinzel text-[10px] md:text-xs tracking-widest text-theme-900 font-bold uppercase">
                        Will You Attend?
                      </h4>
                      <p className="text-[7px] md:text-[8px] text-theme-600 italic">
                        Please respond by September 16, 2026
                      </p>
                    </div>

                    <AnimatePresence mode="wait">
                      {!rsvpSubmitted ? (
                        <motion.form
                          key="rsvp-form"
                          onSubmit={handleRsvpSubmit}
                          className="w-full space-y-2 text-left"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div>
                            <label className="block text-[7px] uppercase tracking-widest text-theme-700 font-bold mb-0.5">
                              Your Name
                            </label>
                            <input
                              type="text"
                              required
                              value={rsvpName}
                              onChange={(e) => setRsvpName(e.target.value)}
                              placeholder="Please enter your name"
                              className="w-full px-2 py-1.5 rounded bg-brown-dark/40 border border-theme-500/20 text-theme-900 placeholder-theme-700/30 focus:outline-none focus:border-theme-500 text-[10px] transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-[7px] uppercase tracking-widest text-theme-700 font-bold mb-0.5">
                              Attendance
                            </label>
                            <div className="grid grid-cols-2 gap-1.5">
                              <button
                                type="button"
                                onClick={() => setAttendance("attending")}
                                className={`py-1.5 rounded border text-[8px] tracking-wider font-bold uppercase transition-all duration-300 ${
                                  attendance === "attending"
                                    ? "bg-theme-500 text-brown-base border-theme-500 shadow-md shadow-theme-500/20"
                                    : "bg-transparent border-theme-500/20 text-theme-700 hover:border-theme-500/50"
                                }`}
                              >
                                Will Attend
                              </button>
                              <button
                                type="button"
                                onClick={() => setAttendance("declined")}
                                className={`py-1.5 rounded border text-[8px] tracking-wider font-bold uppercase transition-all duration-300 ${
                                  attendance === "declined"
                                    ? "bg-theme-500 text-brown-base border-theme-500 shadow-md shadow-theme-500/20"
                                    : "bg-transparent border-theme-500/20 text-theme-700 hover:border-theme-500/50"
                                }`}
                              >
                                Decline
                              </button>
                            </div>
                          </div>

                          {attendance === "attending" && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="space-y-2 overflow-hidden"
                            >
                              <div>
                                <label className="block text-[7px] uppercase tracking-widest text-theme-700 font-bold mb-0.5">
                                  Number of Guests
                                </label>
                                <select
                                  value={guests}
                                  onChange={(e) => setGuests(Number(e.target.value))}
                                  className="w-full px-2 py-1.5 rounded bg-brown-dark/40 border border-theme-500/20 text-theme-900 focus:outline-none focus:border-theme-500 text-[10px] transition-colors"
                                >
                                  {[1, 2, 3, 4, 5].map((n) => (
                                    <option key={n} value={n} className="bg-brown-base text-theme-900">
                                      {n} {n === 1 ? "Guest" : "Guests"}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </motion.div>
                          )}

                          <button
                            type="submit"
                            disabled={submitting || !rsvpName || !attendance}
                            className="w-full py-2 mt-1 rounded bg-gradient-to-r from-theme-500 to-theme-600 hover:from-theme-600 hover:to-theme-700 disabled:opacity-40 text-brown-base font-bold text-[9px] tracking-[0.1em] uppercase shadow-lg shadow-theme-500/5 hover:shadow-theme-500/20 active:scale-[0.98] transition-all duration-150 cursor-pointer flex items-center justify-center gap-2"
                          >
                            {submitting ? (
                              <div className="w-3 h-3 border-2 border-brown-base border-t-transparent rounded-full animate-spin" />
                            ) : (
                              "Confirm RSVP"
                            )}
                          </button>
                        </motion.form>
                      ) : (
                        <motion.div
                          key="rsvp-success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="w-full py-4 px-3 rounded-lg bg-brown-dark/30 border border-theme-500/10 text-center space-y-2"
                        >
                          <div className="w-8 h-8 rounded-full bg-theme-500/10 border border-theme-500/20 flex items-center justify-center mx-auto text-theme-500">
                            <Sparkles className="w-4 h-4 animate-pulse" />
                          </div>
                          <h4 className="font-cinzel text-[10px] text-theme-900 font-bold uppercase tracking-wider">Thank You!</h4>
                          <p className="text-[8px] text-theme-600 max-w-[240px] mx-auto leading-relaxed">
                            Your response has been received. We look forward to celebrating this special day with you!
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>


                  </div>

                  {/* Bottom close button */}
                  <button
                    onClick={() => {
                      setIsOpened(false);
                      if (audioRef.current) {
                        audioRef.current.pause();
                        setIsPlaying(false);
                      }
                    }}
                    className="mt-2 text-theme-700 hover:text-theme-500 hover:underline transition-colors text-[7px] uppercase tracking-[0.2em] flex items-center justify-center gap-1 group w-full pt-2 border-t border-theme-500/10 mx-auto"
                  >
                    Return to Cover
                  </button>

                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
        /* Styling scrollbar in card */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.2);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.4);
        }
      `}} />
    </main>
  );
}
