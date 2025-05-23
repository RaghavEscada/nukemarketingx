"use client";
import { WavyBackgroundDemo } from "@/data/data";
import Link from "next/link";
import { MousePointer } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [, setInitialLoadComplete] = useState(false);
  
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setInitialLoadComplete(true);
    }, 500);

    return () => {
      clearTimeout(initialTimer);
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section
      className="w-full bg-black h-screen relative"
      data-scroll
      data-scroll-speed="-.3"
    >
      {/* Top section */}
      <div className="w-full flex flex-col h-auto border-t border-[#21212155] py-[20px] sm:mb-[60px] xm:mb-[60px] gap-[30px]">
        <div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
        </div>
        
        {/* Scrolling text */}
        <div className="w-full flex items-center justify-center xm:hidden sm:hidden">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
            className="paragraph font-NeueMontreal text-white"
          >
            Explore Nuke Marketing.
          </motion.p>
        </div>
      </div>

      {/* Main content */}
      <div className="w-full flex flex-col items-center justify-center min-h-[50vh] padding-x z-10 relative">
        {/* Headlines */}
        <div className="mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-8xl sm:text-5xl xm:text-5xl font-normal text-white mb-1"
          >
            Create.
          </motion.div>
        </div>
        <div className="mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-8xl sm:text-5xl xm:text-5xl font-normal text-white mb-1"
          >
            Innovate.
          </motion.div>
        </div>
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-8xl sm:text-5xl xm:text-5xl font-normal  text-white"
          >
            Disrupt.
          </motion.div>
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="group relative mb-16"
        >
          <Link href="/contact">
            <div className="relative z-10 py-4 px-10 border-2 border-red-500 rounded-full hover:bg-secondry transition-colors duration-300">
              <span className="relative z-10 text-white group-hover:text-white font-medium transition-colors duration-300">
                Talk to Us
              </span>
            </div>
          </Link>
        </motion.div>
        
        {/* Tags */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 max-w-3xl"
        >
          {['Strategy', 'Design', 'Digital', 'Brand', 'Content', 'Experience', 'Motion'].map((tag, i) => (
            <motion.div 
              key={tag}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="px-4 py-1 rounded-full border border-slate-200 text-white text-sm hover:bg-secondry hover:text-white transition-colors duration-300"
            >
              {tag}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="text-white flex flex-col items-center"
        >
          <p className="mb-2 text-sm uppercase tracking-wider">Scroll</p>
          <MousePointer size={18} strokeWidth={1.25} />
        </motion.div>
      </motion.div>
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <WavyBackgroundDemo />
      </div>
    </section>
  );
}