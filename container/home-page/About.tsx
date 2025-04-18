"use client";
import Image from "next/image";
import { Star, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { TimelineDemo } from "@/data/data";

const socialLinks = [
  { id: 1, title: "Instagram", href: "https://instagram.com", icon: <Instagram size={20} /> },
  { id: 2, title: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={20} /> },
  { id: 3, title: "WhatsApp", href: "https://wa.me/yourphonenumber", icon: <MessageCircle size={20} /> },
];

export default function About() {
  return (
    <section className="w-full bg-[#0A0A0A] text-white py-32 px-6 sm:px-4 rounded-t-[40px] z-20 relative rounded-xl overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Nuclear Pulse Effect */}
      <motion.div 
        className="absolute inset-0 bg-[#FF4D4D]/5 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto relative z-10 mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[5rem] font-black font-NeueMontreal leading-tight tracking-tight mb-12"
        >
          <motion.span 
            className="text-[#FF4D4D] inline-block"
            animate={{
              scale: [1, 1.05, 1],
              textShadow: [
                "0 0 0px rgba(255, 77, 77, 0)",
                "0 0 20px rgba(255, 77, 77, 0.5)",
                "0 0 0px rgba(255, 77, 77, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Let's Nuke
          </motion.span> Your Brand's  
          <motion.span 
            className="text-[#4ECDC4] inline-block"
            animate={{
              scale: [1, 1.05, 1],
              textShadow: [
                "0 0 0px rgba(78, 205, 196, 0)",
                "0 0 20px rgba(78, 205, 196, 0.5)",
                "0 0 0px rgba(78, 205, 196, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            Impact
          </motion.span> Zone
          <br />
          <span className="text-white">Detonating Success</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-xl font-light max-w-2xl mx-auto leading-relaxed"
        >
          We're not just another marketing squad. We're the strategic force that  
          makes your brand explode in the digital space. Time to go nuclear! 💥
        </motion.p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="relative" style={{ width: '600px', height: '400px' }}>
              <video 
                src="/nuke.mp4"

                autoPlay
                loop
                muted
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {/* Nuclear Glow Effect */}
              <motion.div 
                className="absolute inset-0 bg-[#FF4D4D]/10"
                animate={{
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Right Section */}
          <div className="space-y-16">
            {/* Strategy Points */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {/* Strategy Point 1 */}
              <motion.div 
                className="flex items-start gap-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Star className="text-[#FF4D4D]" size={40} strokeWidth={2.5} />
                </motion.div>
                <div>
                  <h4 className="text-3xl font-bold mb-6 text-[#FF4D4D]">Nuclear-Grade Strategy</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    From explosive social media content to full-scale marketing campaigns,
                    we're all about maximum impact. Our squad combines creative firepower
                    with data precision to make your brand detonate in the market.
                  </p>
                </div>
              </motion.div>

              {/* Strategy Point 2 */}
              <motion.div 
                className="flex items-start gap-8"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.5
                  }}
                >
                  <Star className="text-[#4ECDC4]" size={40} strokeWidth={2.5} />
                </motion.div>
                <div>
                  <h4 className="text-3xl font-bold mb-6 text-[#4ECDC4]">Chain Reaction Success</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We're not just another agency - we're your brand's power source.
                    We trigger trends, track engagement metrics, and keep the momentum
                    building. Our mission? Make your brand the center of attention.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-8 border-t border-white/10"
            >
              <h1 className="text-2xl font-bold text-white font-NeueMontreal mb-8">
                Ready to Launch Your Brand?
              </h1>
              <div className="flex gap-8">
                {socialLinks.map((item) => (
                  <motion.a 
                    key={item.id} 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-lg text-gray-400 hover:text-[#4ECDC4] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
     
      
    </section>
  );
}