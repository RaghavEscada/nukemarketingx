"use client";
import Image from "next/image";
import { Star, Instagram, Linkedin, MessageCircle, Target, Zap, Eye } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { id: 1, title: "Instagram", href: "https://instagram.com", icon: <Instagram size={20} /> },
  { id: 2, title: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={20} /> },
  { id: 3, title: "WhatsApp", href: "https://wa.me/yourphonenumber", icon: <MessageCircle size={20} /> },
];

const logos = [
  {
    name: "Babel",
    url: "https://svgl.app/library/babel.svg",
  },
  {
    name: "Ngrok",
    url: "https://svgl.app/library/ngrok-light.svg",
  },
  {
    name: "Webflow",
    url: "https://svgl.app/library/webflow.svg",
  },
  {
    name: "Perplexity",
    url: "https://svgl.app/library/perplexity_wordmark_light.svg",
  },
  {
    name: "Sanity",
    url: "https://svgl.app/library/sanity.svg",
  },
  {
    name: "Post CSS",
    url: "https://svgl.app/library/postcss_wordmark.svg",
  },
];

const LogoCloud = () => {
  return (
    <div className="w-full py-12">
      <div className="mx-auto w-full px-2 md:px-4">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-30 w-32 px-2"
                    alt={logo.name}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

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

      {/* Our Story Section */}
      <div className="w-full max-w-6xl mx-auto relative z-10 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-5xl font-black font-NeueMontreal mb-8 text-[#FF4D4D]">
            Our Story
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10"
        >
          <div className="prose prose-xl prose-invert max-w-none text-gray-300 leading-relaxed space-y-6">
            <p>
              We started Nuke because, honestly, we just didn't fit into the corporate world!
              Both of us started our careers in a Big 4 firm, but somewhere between endless reports 
              and corporate calls, we knew this wasn't it.
            </p>
            <p>
              Swetha was the first to break free—she quit and joined a startup, where she juggled 
              multiple verticals and got a taste of the fast-paced creative world. Meanwhile, Prabha 
              was always the "fun guy" — the one cracking jokes, pulling off skits at culturals, and 
              entertaining everyone with his out-of-the-box ideas. Sitting at a desk all day? 
              Definitely not his thing. So, he quit too.
            </p>
            <p>
              With zero plans but a lot of excitement, we started freelancing. We worked with creators, 
              and our first-ever collaboration was with our good friend Mano Chandru aka MC. From writing 
              scripts to structuring webinars, we did it all. One gig led to another, and soon we were 
              working with Cuts Coffee Shyam, then Hoodieguy, and many more.
            </p>
            <p>
              But freelancing had its share of struggles—late payments, inconsistent work, and most 
              importantly, the unsung heroes behind the scenes (editors, designers, writers) never 
              getting the recognition they deserved. So, we thought, "Why not build something bigger and better?"
            </p>
            <p className="text-[#4ECDC4] font-semibold">
              That's how Nuke was born. The name? Well, we wanted to create marketing that explodes and 
              spreads like wildfire. Also, let's be honest, we just thought it sounded cool. :P
            </p>
            <p>
              But beyond the name, we wanted to set new standards in the industry—where everyone in our 
              team gets the recognition they deserve, where payments are smooth and are on time and where 
              creativity and quality come first, ensuring real value for both our clients and their audience.
            </p>
            <p className="text-[#FF4D4D] font-bold text-xl">
              So yeah, that's our story. Now, let's create yours!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why NUKE Section */}
      <div className="w-full max-w-6xl mx-auto relative z-10 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-5xl font-black font-NeueMontreal mb-8 text-[#4ECDC4]">
            Why NUKE?
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#FF4D4D]/10 to-transparent rounded-2xl p-8 border border-[#FF4D4D]/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <Zap className="text-[#FF4D4D]" size={32} />
              <h4 className="text-2xl font-bold text-[#FF4D4D]">Discovery & Strategy</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              First things first, we hop on a <strong>discovery call</strong>—not just to tick a box, 
              but to truly understand what makes you and your brand tick. What's your story? What problems 
              are you solving? And most importantly, what value are you bringing to the table?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#4ECDC4]/10 to-transparent rounded-2xl p-8 border border-[#4ECDC4]/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <Target className="text-[#4ECDC4]" size={32} />
              <h4 className="text-2xl font-bold text-[#4ECDC4]">Work Mode Activated</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Once we have this foundation, we get to <strong>work mode</strong>—breaking down ideas, 
              brainstorming solutions, and doing a little bit of <em>spying</em> (aka competitor analysis). 
              We also dig into industry trends to figure out what works and, more importantly, what doesn't.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <div className="text-center space-y-6">
            <p className="text-xl text-gray-300">
              Here's the thing: <strong className="text-[#FF4D4D]">we don't believe in putting out content just for the sake of it.</strong> 
              No unnecessary fluff, no random posts that go nowhere—just <strong className="text-[#4ECDC4]">strategic, 
              high-quality storytelling</strong> that actually connects with people.
            </p>
            <p className="text-xl text-gray-300">
              But the real game-changer? <strong className="text-[#FF4D4D]">Consistency.</strong> We don't just create great 
              content and leave you hanging. We make sure you show up, stay accountable, and build a brand 
              that people recognize and trust.
            </p>
            <p className="text-2xl font-bold text-white">
              At NUKE, we don't do <em>generic</em>. <span className="text-[#4ECDC4]">We make you unforgettable.</span> 
              Not just another name in the crowd, but a brand that <span className="text-[#FF4D4D]">demands attention.</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Mission & Vision Section */}
      <div className="w-full max-w-6xl mx-auto relative z-10 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-5xl font-black font-NeueMontreal mb-8">
            <span className="text-[#FF4D4D]">NUKE's</span> Mission & Vision
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#FF4D4D]/10 rounded-2xl"></div>
            <div className="relative bg-[#0A0A0A] border-2 border-[#FF4D4D] rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Target className="text-[#FF4D4D]" size={40} />
                <h4 className="text-3xl font-bold text-[#FF4D4D]">Mission</h4>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                We're here to <strong className="text-white">redefine marketing</strong>—no fluff, no boring content, 
                just <strong className="text-[#FF4D4D]">bold strategies and creative storytelling that actually work.</strong> 
                We help brands, businesses, and creators stand out, connect, and make an impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-4 -right-4 w-full h-full bg-[#4ECDC4]/10 rounded-2xl"></div>
            <div className="relative bg-[#0A0A0A] border-2 border-[#4ECDC4] rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Eye className="text-[#4ECDC4]" size={40} />
                <h4 className="text-3xl font-bold text-[#4ECDC4]">Vision</h4>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                NUKE is more than marketing; it's a movement. We aim to <strong className="text-[#4ECDC4]">turn brands 
                into unforgettable names,</strong> while giving credit to the creative minds behind the scenes. 
                Marketing should be <strong className="text-white">fun, effective, and never generic.</strong> Let's make it happen!
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content - Video & Strategy */}
      <div className="w-full max-w-6xl mx-auto relative z-10 mb-32">
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
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              {/* Nuclear Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-[#FF4D4D]/10 rounded-2xl"
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
              className="pt-8 pb-10 border-t border-white/10"
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

      {/* Logo Cloud */}
      <div>
        <LogoCloud />
      </div>
    </section>
  );
}