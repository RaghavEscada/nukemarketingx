import React from 'react';
import { ArrowRight, Instagram, Linkedin, MessageCircle, Target, TrendingUp, Users, Star, Play } from 'lucide-react';

const socialLinks = [
  { id: 1, title: "Instagram", href: "https://instagram.com", icon: <Instagram size={18} /> },
  { id: 2, title: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={18} /> },
  { id: 3, title: "WhatsApp", href: "https://wa.me/yourphonenumber", icon: <MessageCircle size={18} /> },
];

const stats = [
  { number: "500M+", label: "Impressions Generated" },
  { number: "2.3x", label: "Average ROI Increase" },
  { number: "98%", label: "Client Retention Rate" },
  { number: "150+", label: "Brands Transformed" }
];

export default function NukeMarketing() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
     
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Column - Main Headline */}
            <div className="lg:col-span-8">
              <h1 className="text-8xl lg:text-9xl font-light leading-none tracking-tight mb-8">
                Stop the<br/>
                <span className="italic font-extralight">Scroll</span>
              </h1>
              
              <div className="max-w-2xl">
                <p className="text-2xl font-light leading-relaxed mb-8 text-white/90">
                  Content Strategy and Brand for Attention, Engagement and Results.
                </p>
                
                <p className="text-lg font-light leading-relaxed text-white/60 mb-12">
                  We create content that transforms scrollers into followers and followers into customers. Every piece strategically crafted to build authority and drive measurable outcomes.
                </p>
              </div>
            </div>

            {/* Right Column - Tagline */}
            <div className="lg:col-span-4">
              <div className="border-l border-white/20 pl-8">
                <p className="text-sm font-light text-white/40 tracking-widest uppercase mb-4">
                  Our Approach
                </p>
                <p className="text-lg font-light leading-relaxed text-white/80">
                  Your audience is scrolling. Are they stopping for you?
                </p>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-32 pt-16 border-t border-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="text-4xl lg:text-5xl font-extralight text-white mb-2 tracking-tight">{stat.number}</div>
                <div className="text-sm text-white/50 font-light tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="aspect-[16/9] lg:aspect-[21/9] bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 border border-white/30 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm">
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <h3 className="text-2xl font-light mb-2">Strategic Content in Action</h3>
                <p className="text-white/60 font-light">Watch how we transform brands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-8">
              <h2 className="text-6xl lg:text-7xl font-light leading-tight tracking-tight">
                Our Services
              </h2>
            </div>
            <div className="lg:col-span-4">
              <div className="border-l border-white/20 pl-8">
                <p className="text-lg font-light text-white/60 leading-relaxed">
                  Everything you need to dominate your market through strategic content that commands attention and drives results.
                </p>
              </div>
            </div>
          </div>

          {/* Services Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Service - Large */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="h-full border border-white/10 rounded-2xl p-12 hover:border-white/20 transition-all duration-500 group">
                <div className="flex items-start gap-6 mb-12">
                  <div className="w-16 h-16 border border-white/20 rounded-xl flex items-center justify-center group-hover:border-white/40 transition-colors">
                    <Target className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 tracking-widest uppercase mb-2">01</p>
                    <h3 className="text-3xl font-light mb-4">Strategic Content</h3>
                    <p className="text-white/60 font-light text-lg">The foundation of digital success</p>
                  </div>
                </div>
                
                <p className="text-xl font-light text-white/80 mb-16 leading-relaxed max-w-xl">
                  We don't just create content—we architect digital strategies. Every piece is strategically crafted to build authority, engage audiences, and drive measurable business results.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {['Content Architecture', 'Brand Positioning', 'Audience Analysis', 'Performance Tracking'].map((tag, i) => (
                    <div key={tag} className="border border-white/10 rounded-lg p-4 text-center hover:border-white/20 transition-colors">
                      <span className="text-sm font-light text-white/70">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Brand Amplification */}
            <div className="group">
              <div className="h-full border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center group-hover:border-white/40 transition-colors">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-sm text-white/40 tracking-widest">02</span>
                </div>
                <h3 className="text-xl font-light mb-4">Brand Amplification</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">
                  Transform your brand presence with content that resonates deeply and converts at scale across all platforms.
                </p>
              </div>
            </div>

            {/* Audience Development */}
            <div className="group">
              <div className="h-full border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 border border-white/20 rounded-lg flex items-center justify-center group-hover:border-white/40 transition-colors">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-sm text-white/40 tracking-widest">03</span>
                </div>
                <h3 className="text-xl font-light mb-4">Audience Development</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">
                  Build communities of loyal followers who actively engage with your brand message and become lifelong customers.
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="lg:col-span-3">
              <div className="border border-white/20 rounded-2xl p-12 text-center hover:border-white/30 transition-all duration-500 bg-gradient-to-r from-white/5 to-white/0">
                <h3 className="text-3xl font-light mb-6">Ready to Transform Your Brand?</h3>
                <p className="text-white/70 mb-8 text-lg font-light max-w-2xl mx-auto">
                  Join the brands that lead their industries with strategic content. Connect with us through Instagram, LinkedIn, or WhatsApp.
                </p>
                <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-colors">
                  Get Started Today
                  <ArrowRight className="inline ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <p className="text-sm text-white/40 tracking-widest uppercase mb-8">About Nuke</p>
              <h2 className="text-5xl lg:text-6xl font-light leading-tight mb-12 tracking-tight">
                Strategic Excellence<br/>
                <span className="italic font-extralight">in Every Detail</span>
              </h2>
              
              <div className="space-y-8">
                <p className="text-xl font-light leading-relaxed text-white/80">
                  We believe great content isn't just told—it's strategically crafted. We help brands stand out with clear, compelling content that converts audiences into customers.
                </p>
                
                <p className="text-lg font-light leading-relaxed text-white/60">
                  Every brand has untapped potential. Let's create your breakthrough moment—backed by strategy, creativity, and proven results that transform businesses.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-square border border-white/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
                <div className="relative text-center">
                  <div className="w-24 h-24 border border-white/30 rounded-2xl mx-auto mb-8 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-12 h-12 bg-white rounded-lg"></div>
                  </div>
                  <p className="text-2xl font-light">Where Creativity</p>
                  <p className="text-2xl font-light">Meets Results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

  
    
    </div>
  );
}