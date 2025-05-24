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
  const [showStartPrompt, setShowStartPrompt] = useState(true);
  const [animationState, setAnimationState] = useState("initial");
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const boomSoundRef = useRef<HTMLAudioElement | null>(null);
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

  const startExperience = async () => {
    try {
      if (audioContext && audioContext.state === 'suspended') {
        await audioContext.resume();
      }

      if (boomSoundRef.current) {
        try {
          await boomSoundRef.current.play();
        } catch (error) {
          console.warn("Boom sound playback failed:", error);
        }
      }
      
      setAnimationState("explosion");
      
      const audio = audioRef.current;
      if (audio) {
        audio.volume = 0;
        
        try {
          await audio.play();
          
          const fadeIn = setInterval(() => {
            if (audio.volume < 0.5) {
              audio.volume += 0.1;
            } else {
              clearInterval(fadeIn);
            }
          }, 100);
          
          setIsPlaying(true);
        } catch (error) {
          console.warn("Background music playback failed:", error);
        }
      }
      
      setTimeout(() => {
        setAnimationState("complete");
        setTimeout(() => {
          setShowStartPrompt(false);
        }, 500);
      }, 2000);
    } catch (error) {
      console.error("Error during experience start:", error);
      setAnimationState("explosion");
      setTimeout(() => {
        setAnimationState("complete");
        setTimeout(() => {
          setShowStartPrompt(false);
        }, 500);
      }, 2000);
    }
  };

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
      {/* Creative Entry Screen */}
      {showStartPrompt && (
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: animationState === "complete" ? 0 : 1 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 bg-black z-[100] flex items-center justify-center overflow-hidden"
        >
          {/* Geometric background pattern */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border border-white/5"
                style={{
                  width: Math.random() * 200 + 50,
                  height: Math.random() * 200 + 50,
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          {animationState === "initial" && (
            <motion.div className="text-center relative z-10">
              {/* Animated lines around title */}
              <div className="relative">
                <motion.div 
                  className="absolute -top-8 left-1/2 w-32 h-px bg-white"
                  initial={{ scaleX: 0, x: "-50%" }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.div 
                  className="absolute -bottom-8 left-1/2 w-32 h-px bg-white"
                  initial={{ scaleX: 0, x: "-50%" }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                
                <motion.h1 
                  className="text-6xl font-thin text-white mb-20 tracking-[0.3em] relative"
                  initial={{ opacity: 0, letterSpacing: "1em" }}
                  animate={{ opacity: 1, letterSpacing: "0.3em" }}
                  transition={{ duration: 1.5 }}
                >
                  NUKE
                  <motion.span 
                    className="block text-xl font-light mt-2 tracking-[0.5em]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    MARKETING
                  </motion.span>
                </motion.h1>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="relative group cursor-pointer"
                onClick={startExperience}
              >
                <div className="w-24 h-24 border border-white rounded-full flex items-center justify-center mx-auto relative overflow-hidden group-hover:bg-white transition-colors duration-500">
                  <motion.div
                    className="text-white group-hover:text-black transition-colors duration-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.div>
                  
                  {/* Rotating border */}
                  <motion.div
                    className="absolute inset-0 border-t-2 border-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <p className="text-white text-xs tracking-widest mt-4 opacity-70">LAUNCH EXPERIENCE</p>
              </motion.div>
            </motion.div>
          )}
          
          {animationState === "explosion" && (
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                initial={{ scale: 0.1 }}
                animate={{ 
                  scale: [0.1, 2, 3], 
                  opacity: [1, 0.7, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut", 
                  times: [0, 0.6, 1] 
                }}
                className="relative"
              >
                {/* Multiple expanding circles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 border border-white rounded-full"
                    animate={{
                      scale: [1, 3 + i],
                      opacity: [1, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      ease: "easeOut"
                    }}
                    style={{
                      width: 100 + i * 20,
                      height: 100 + i * 20,
                      left: -(i * 10),
                      top: -(i * 10)
                    }}
                  />
                ))}
                
                <div className="w-24 h-24 flex items-center justify-center">
                  <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
      
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