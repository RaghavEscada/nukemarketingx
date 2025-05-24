import React from 'react';
import { ArrowRight, Instagram, Linkedin, MessageCircle, Target, TrendingUp, Users, Star, Play, Calendar, Award, Heart } from 'lucide-react';
import StyledSection from "./page";

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
    <div className="bg-stone-50 text-slate-900 min-h-screen">
      {/* Hero Section - Nordic Minimalism */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-sm text-slate-600 font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                Marketing Excellence
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-light leading-[0.9] tracking-tight text-slate-900">
                Stop the<br/>
                <span className="text-slate-500 font-extralight">Scroll</span>
              </h1>
              
              <p className="text-xl font-light leading-relaxed text-slate-600 max-w-lg">
                Content Strategy and Brand for Attention, Engagement and Results.
              </p>
              
              <p className="text-base leading-relaxed text-slate-500 max-w-md">
                We create content that transforms scrollers into followers and followers into customers.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-colors">
                  Start Your Journey
                  <ArrowRight className="inline ml-2 w-4 h-4" />
                </button>
                <button className="border border-slate-300 text-slate-700 px-8 py-4 rounded-full font-medium hover:bg-slate-100 transition-colors">
                  View Our Work
                </button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl overflow-hidden relative">
                {/* Placeholder for main hero image */}
                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-slate-300 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Target className="w-10 h-10 text-slate-500" />
                    </div>
                    <p className="text-slate-500 font-light">Strategic Content Showcase</p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-medium text-slate-700">Live Results</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-light text-slate-900">2.3x</div>
                  <div className="text-sm text-slate-500">ROI Increase</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-16 border-t border-slate-200">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-light text-slate-900 mb-2">{stat.number}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Work That Speaks</h2>
            <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
              Strategic content that transforms brands and drives measurable results across every platform.
            </p>
          </div>

          {/* Masonry-style image grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large featured image */}
            <div className="md:col-span-2 lg:row-span-2">
              <div className="aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-slate-400 mb-4 mx-auto" />
                    <p className="text-slate-600 font-light">Brand Transformation Case Study</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-sm font-medium text-slate-900">500% Growth Story</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller images */}
            <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                <Instagram className="w-12 h-12 text-slate-400" />
              </div>
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
            </div>

            <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                <TrendingUp className="w-12 h-12 text-slate-400" />
              </div>
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
            </div>

            <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                <Award className="w-12 h-12 text-slate-400" />
              </div>
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
            </div>

            <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden relative group cursor-pointer">
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                <Users className="w-12 h-12 text-slate-400" />
              </div>
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
              Services
              </h2>
              <p className="text-lg font-light text-slate-600 leading-relaxed">
                Everything you need to dominate your market through strategic content that commands attention and drives results.
              </p>
            </div>
            
            {/* Service highlight image */}
            <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-16 h-16 text-slate-300 mb-4 mx-auto" />
                  <p className="text-slate-500 font-light">Service Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strategic Content */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">Strategic Content</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-6">
                We don't just create content—we architect digital strategies that build authority and drive results.
              </p>
              <div className="space-y-2">
                {['Content Architecture', 'Brand Positioning', 'Audience Analysis'].map((item) => (
                  <div key={item} className="flex items-center text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Amplification */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">Brand Amplification</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-6">
                Transform your brand presence with content that resonates deeply and converts at scale.
              </p>
              <div className="space-y-2">
                {['Platform Strategy', 'Viral Content', 'Brand Authority'].map((item) => (
                  <div key={item} className="flex items-center text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Audience Development */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-4">Audience Development</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-6">
                Build communities of loyal followers who actively engage and become lifelong customers.
              </p>
              <div className="space-y-2">
                {['Community Building', 'Engagement Strategy', 'Customer Journey'].map((item) => (
                  <div key={item} className="flex items-center text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-3"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-sm text-slate-600 font-medium mb-8">
                <Heart className="w-4 h-4 mr-2" />
             Excellence
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-8">
                Strategic Excellence<br/>
                <span className="text-slate-500 font-extralight">in Every Detail</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg font-light leading-relaxed text-slate-600">
                  We believe great content isn't just told—it's strategically crafted. We help brands stand out with clear, compelling content that converts audiences into customers.
                </p>
                
                <p className="font-light leading-relaxed text-slate-500">
                  Every brand has untapped potential. Let's create your breakthrough moment—backed by strategy, creativity, and proven results that transform businesses.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="w-12 h-12 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* About image */}
            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg"></div>
                  </div>
                  <p className="text-xl font-light text-slate-700">Where Creativity</p>
                  <p className="text-xl font-light text-slate-700">Meets Results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StyledSection/>
     
    </div>
  );
}