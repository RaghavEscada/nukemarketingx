import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { navVariants } from "@/motion";
import { TextHover } from "@/animation";
import { navbarItems } from "@/constants";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import MobileNav from "./MobileNav";

declare global {
  interface Window {
    AudioContext: typeof AudioContext;
    webkitAudioContext: typeof AudioContext;
  }
}

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { scrollY } = useScroll();

  // Initialize audio context
  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      const context = new AudioContext();
      setAudioContext(context);
    }
  }, []);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleAudio = async () => {
    try {
      const audio = audioRef.current;
      if (audio) {
        if (isPlaying) {
          await audio.pause();
          setIsPlaying(false);
        } else {
          if (audioContext && audioContext.state === 'suspended') {
            await audioContext.resume();
          }
          
          try {
            await audio.play();
            setIsPlaying(true);
          } catch (error) {
            console.warn("Audio playback failed:", error);
          }
        }
      }
    } catch (error) {
      console.error("Error toggling audio:", error);
    }
  };

  useEffect(() => {
    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [audioContext]);

  return (
    <>
      {/* Creative Navbar */}
      <motion.nav
        variants={navVariants}
        className="w-full h-[10vh] px-12 fixed top-0 left-0 z-50 sm:hidden xm:hidden md:hidden"
        animate={hidden ? "hidden" : "vissible"}
      >
        {/* Dynamic grid background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Main nav background */}
        <motion.div 
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          style={{
            background: `linear-gradient(90deg, 
              rgba(0,0,0,0.9) 0%, 
              rgba(255,255,255,0.05) ${typeof window !== 'undefined' ? (mousePos.x / window.innerWidth) * 100 : 50}%, 
              rgba(0,0,0,0.9) 100%)`
          }}
        />

        <div className="relative z-10 h-full flex items-center justify-between">
          {/* Creative Logo Section */}
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href={"/"} className="relative group">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/logo.svg"
                  alt="Nuke Logo"
                  width={80}
                  height={80}
                  className="relative z-10"
                />
                {/* Logo glow effect */}
                <motion.div
                  className="absolute inset-0 bg-white rounded-full blur-xl opacity-0 group-hover:opacity-20"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
            
            {/* Vertical separator */}
            <motion.div 
              className="w-px h-8 bg-white/20"
              animate={{ scaleY: [1, 1.5, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Live time display */}
            <motion.div 
              className="text-white/60 text-xs font-mono tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {currentTime.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
              })}
            </motion.div>
          </motion.div>

          {/* Artistic Navigation */}
          <div className="flex items-center">
            {navbarItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative mx-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link href={item.href} className="group relative block">
                  <motion.span 
                    className="text-white text-sm font-light tracking-wider relative z-10 block py-2"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.title}
                  </motion.span>
                  
                  {/* Creative underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-white origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Side accent */}
                  <motion.div
                    className="absolute left-0 top-1/2 w-px h-0 bg-white -translate-y-1/2"
                    whileHover={{ height: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Futuristic Audio Control */}
          <div className="flex items-center space-x-6">
            {/* Audio visualizer */}
            {isPlaying && (
              <motion.div 
                className="flex items-center space-x-1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 bg-white/60 rounded-full"
                    animate={{ 
                      height: [8, 24, 8],
                      opacity: [0.4, 1, 0.4]
                    }}
                    transition={{ 
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            )}

            <motion.button 
              onClick={toggleAudio}
              className="relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center relative overflow-hidden"
                whileHover={{ borderColor: "rgba(255,255,255,0.8)" }}
              >
                {/* Rotating ring when playing */}
                {isPlaying && (
                  <motion.div
                    className="absolute inset-1 border-t border-white/50 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                )}
                
                <motion.div
                  className="text-white z-10"
                  animate={{ 
                    scale: isPlaying ? [1, 1.1, 1] : 1 
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: isPlaying ? Infinity : 0 
                  }}
                >
                  {isPlaying ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </motion.div>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>
      
      {/* Audio elements */}
      <audio ref={audioRef} src="/loop.mp3" loop />
      
      <MobileNav />
    </>
  );
}