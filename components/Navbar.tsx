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
  const [animationState, setAnimationState] = useState("initial"); // initial, explosion, complete
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
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
      // Resume audio context if it exists
      if (audioContext && audioContext.state === 'suspended') {
        await audioContext.resume();
      }

      // Play boom sound effect immediately
      if (boomSoundRef.current) {
        try {
          await boomSoundRef.current.play();
        } catch (error) {
          console.warn("Boom sound playback failed:", error);
        }
      }
      
      // Start explosion animation right away
      setAnimationState("explosion");
      
      // Start background music
      const audio = audioRef.current;
      if (audio) {
        // Set volume to 0 initially
        audio.volume = 0;
        
        try {
          await audio.play();
          
          // Fade in the volume
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
      
      // Complete animation and remove entry screen
      setTimeout(() => {
        setAnimationState("complete");
        setTimeout(() => {
          setShowStartPrompt(false);
        }, 500);
      }, 2000);
    } catch (error) {
      console.error("Error during experience start:", error);
      // Fallback: continue with animation even if audio fails
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
          // Resume audio context if it exists
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

  // Cleanup audio context on unmount
  useEffect(() => {
    return () => {
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [audioContext]);

  return (
    <>
      {/* Minimalist Entry Experience */}
      {showStartPrompt && (
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: animationState === "complete" ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black z-[100] flex items-center justify-center overflow-hidden"
        >
          {/* Initial State */}
          {animationState === "initial" && (
            <motion.div className="text-center flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
               
              </motion.div>
              
              <motion.h1 
                className="text-4xl font-light text-white mb-12 tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                NUKE MARKETING
              </motion.h1>
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                onClick={startExperience}
                className="px-10 py-3 bg-transparent border border-white text-white rounded-none hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wider"
              >
                LAUNCH
              </motion.button>
            </motion.div>
          )}
          
          {/* Explosion Animation */}
          {animationState === "explosion" && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{ 
                  scale: [0.2, 1.5, 2, 2.5], 
                  opacity: [0, 1, 1, 0] 
                }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut", 
                  times: [0, 0.3, 0.5, 1] 
                }}
                className="relative w-64 h-64 flex items-center justify-center"
              >
                <div className="absolute inset-0 rounded-full bg-secondry opacity-60"></div>
                <div className="absolute inset-0 rounded-full border border-white animate-ping"></div>
                <div className="z-10">
                  <Image
                    src="/nukename2.webp"
                    alt="Nuke Marketing Logo"
                    width={160}
                    height={160}
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
      
      <motion.nav
        variants={navVariants}
        className="w-full h-[8vh] padding-x fixed top-0 left-0 z-50 backdrop-blur-[7px] flex items-center justify-between sm:hidden xm:hidden md:hidden"
        animate={hidden ? "hidden" : "vissible"}>
        <div className="w-[60%]">
          <Link href={"/"}>
            <Image
              src="/nukename2.png"
              alt="nuke logo"
              width={120}
              height={140}
            />
          </Link>
        </div>
        <div className="flex gap-x-[20px] w-[50%]">
          {navbarItems.map((item) => (
            <Link
              key={item.id}
              className={`w-fit paragraph font-medium font-NeueMontreal text-secondry capitalize flex flex-col hover ${
                item.id === 5 && "ml-auto"
              }`}
              href={item.href}>
              <TextHover
                titile1={item.title}
                titile2={item.title}
              />
            </Link>
          ))}
          <button 
            onClick={toggleAudio}
            className="flex items-center justify-center ml-4 bg-secondry hover:bg-opacity-80 transition-all duration-300 text-white rounded-full w-8 h-8"
            aria-label={isPlaying ? "Pause audio" : "Play audio"}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
              </svg>
            )}
          </button>
        </div>
      </motion.nav>
      
      {/* Audio elements */}
      <audio ref={audioRef} src="/loop.mp3" loop />
      <audio ref={boomSoundRef} src="/boom.mp3" />
      
      <MobileNav />
    </>
  );
}