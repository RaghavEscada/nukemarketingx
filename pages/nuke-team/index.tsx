import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Curve } from "@/components";
import { LampDemoTeam } from "@/data/data";
import Spline from "@splinetool/react-spline";

const teamMembers = [
  {
    name: "PRABHA",
    role: "Visionary CEO",
    image: "/dev.jpeg",
    description: "Transforming abstract concepts into elegant realities with an unmatched strategic perspective and timeless leadership philosophy.",
  },
  {
    name: "SWETHA",
    role: "Creative Director",
    image: "/adi.jpeg",
    description: "Weaving sophistication into every brand narrative, crafting experiences that resonate with refined sensibility and lasting impression.",
  },
  {
    name: "RAGHAV",
    role: "Web Developer",
    image: "/rag.jpeg",
    description: "Orchestrating digital experiences with precision and artistry, where aesthetic beauty meets functional brilliance.",
  },
];

export default function MeetOurTeam() {
  const [index, setIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  // Hide scroll indicator after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle when Spline is loaded
  const handleSplineLoad = () => {
    setIsSplineLoaded(true);
  };

  return (
    <Curve backgroundColor={"#f1f1f1"}>
      {/* Spline container - made responsive */}
      <div className="relative w-full h-screen">
        {/* Loading animation */}
        <AnimatePresence>
          {!isSplineLoaded && (
            <motion.div 
              className="absolute inset-0 z-20 bg-gradient-to-b from-white to-gray-50 flex flex-col justify-center items-center"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img 
                src="/nuke.png" 
                alt="nuke"
                className="h-28 w-auto object-contain mb-8"
                animate={{ 
                  scale: [1, 1.05, 1],
                  filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="w-72 h-1 bg-gray-100 rounded-full overflow-hidden mt-6"
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-gray-400 to-black rounded-full"
                  animate={{ x: [-288, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              <p className="mt-6 text-gray-500 font-light tracking-wider animate-pulse">
                CURATING EXPERIENCE
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
        <Spline
          scene="https://prod.spline.design/oy2Au6Go8zzEWh1g/scene.splinecode"
          className="w-full h-full"
          onLoad={handleSplineLoad}
        />
        
        {/* Full-width black footer with centered logo */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-black z-10 flex justify-center items-center rounded-t-3xl">
          <img 
            src="/nuke.png" 
            alt="nuke" 
            className="h-16 w-auto object-contain"
          />
        </div>
        
        {/* Centered scroll indicator for all screen sizes */}
        <AnimatePresence>
          {showScrollIndicator && isSplineLoaded && (
            <motion.div 
              className="absolute bottom-10 text-red-500 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-lg font-medium mb-2">Scroll Down</p>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <LampDemoTeam />
      
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-50 text-black pt-32 px-4">
        {/* Quote - centered and responsive on all devices */}
        <h1 className="absolute top-16 md:top-28 italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter font-light text-gray-700 text-center w-full max-w-xl mx-auto px-4 mb-16">
          &quot;Elevating moments into masterpieces, simplicity into significance&quot;
        </h1>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col items-center text-center max-w-4xl w-full px-4 sm:px-6 md:px-8 mt-16 md:mt-24"
          >
            <motion.div className="relative">
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-tr from-gray-200 via-gray-300 to-gray-400 rounded-3xl blur-sm opacity-75"
                animate={{ 
                  background: [
                    "linear-gradient(to top right, #e5e7eb, #d1d5db, #9ca3af)", 
                    "linear-gradient(to top right, #d1d5db, #9ca3af, #e5e7eb)",
                    "linear-gradient(to top right, #9ca3af, #e5e7eb, #d1d5db)"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.img
                src={teamMembers[index].image}
                alt={teamMembers[index].name}
                className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl object-cover shadow-md border border-white mb-12"
                whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
                animate={{ boxShadow: ["0 4px 12px rgba(0,0,0,0.1)", "0 6px 16px rgba(0,0,0,0.2)", "0 4px 12px rgba(0,0,0,0.1)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            
            <div className="flex flex-col items-center max-w-sm mt-4">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {teamMembers[index].name}
              </motion.h2>
              
              <motion.div 
                className="h-px w-24 bg-gradient-to-r from-transparent via-gray-400 to-transparent my-5"
                initial={{ opacity: 0, width: "0px" }}
                animate={{ opacity: 1, width: "96px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              
              <motion.p 
                className="text-base md:text-lg text-gray-500 uppercase tracking-widest font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                {teamMembers[index].role}
              </motion.p>
              
              <motion.p 
                className="mt-8 text-gray-600 leading-relaxed text-sm md:text-base font-light italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                {teamMembers[index].description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrow navigation - horizontally split on both sides */}
        <motion.div 
          className="absolute left-4 sm:left-8 md:left-12 lg:left-24 top-1/2 transform -translate-y-1/2"
          whileHover={{ x: -3 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            onClick={prevSlide}
            className="p-3 sm:p-4 rounded-full bg-white bg-opacity-80 backdrop-blur-sm hover:bg-opacity-100 transition-all duration-300 shadow-md border border-gray-100"
            aria-label="Previous team member"
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800" />
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="absolute right-4 sm:right-8 md:right-12 lg:right-24 top-1/2 transform -translate-y-1/2"
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            onClick={nextSlide}
            className="p-3 sm:p-4 rounded-full bg-white bg-opacity-80 backdrop-blur-sm hover:bg-opacity-100 transition-all duration-300 shadow-md border border-gray-100"
            aria-label="Next team member"
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800" />
          </motion.button>
        </motion.div>
      </section>
    </Curve>
  );
}