import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Timeline } from "@/components/ui/timeline";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { LampContainer } from "@/components/ui/lamp";
import { MacbookScroll } from "@/components/ui/macbookscroll";



import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";


export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/team1.jpeg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/team3.jpeg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/team2.jpeg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/team4.png",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/team2.jpeg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;

};





export function TimelineDemo() {
  const data = [
    {
      title: "Deal Sourcing",
      content: (
        <div className="flex items-center space-x-8 bg-gray-900 p-6 rounded-xl">
          <div className="flex-1">
            <h2 className="mb-4 text-2xl font-bold text-blue-500">
              📊 Deal Sourcing: The Heart of Business Growth 🚀
            </h2>
            
            <p className="mb-5 text-base text-white">
              The art of finding high-potential investment opportunities, acquisitions, and partnerships that drive growth.
            </p>
            
            <div className="mb-5 border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Why is Deal Sourcing Important? 🤔
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">💸</span>
                  <span><strong className="text-blue-300">Maximizing Returns:</strong> Identifying high-quality opportunities</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🌐</span>
                  <span><strong className="text-blue-300">Building Networks:</strong> Expanding connections for new opportunities</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🏦</span>
                  <span><strong className="text-blue-300">Portfolio Diversification:</strong> Sourcing across multiple sectors</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Key Steps 🔍
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🔬</span>
                  <span><strong className="text-blue-300">Market Research:</strong> Stay updated on trends</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🗣️</span>
                  <span><strong className="text-blue-300">Networking:</strong> Build relationships with key players</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">✅</span>
                  <span><strong className="text-blue-300">Screening:</strong> Identify the right opportunities</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">💬</span>
                  <span><strong className="text-blue-300">Negotiation:</strong> Ensure win-win deals</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <img
              src="hand.gif"
              alt="startup template"
              width={500}
              height={500}
              className="w-64 h-64 rounded-lg object-cover shadow-blue-500/50 shadow-lg"
            />
          </div>
        </div>
      ),
    },    
    {
      title: "Investment Analysis",
      content: (
        <div className="flex items-center space-x-8 bg-gray-900 p-6 rounded-xl">
          <div className="flex-1">
            <h2 className="mb-4 text-2xl font-bold text-blue-500">
              🔍 Investment Analysis: From Discovery to Decision 🎯
            </h2>
            
            <p className="mb-5 text-base text-white">
              The systematic process of evaluating potential opportunities to determine their strategic fit and financial viability.
            </p>
            
            <div className="mb-5 border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Why is Investment Analysis Critical? 💡
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">📈</span>
                  <span><strong className="text-blue-300">Value Assessment:</strong> Identifying true growth potential beyond surface numbers</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🧩</span>
                  <span><strong className="text-blue-300">Strategic Alignment:</strong> Ensuring opportunities match long-term objectives</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">⚖️</span>
                  <span><strong className="text-blue-300">Risk Management:</strong> Uncovering potential challenges before commitment</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Essential Components 🔍
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">📊</span>
                  <span><strong className="text-blue-300">Financial Examination:</strong> Scrutinize performance metrics and projections</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🏭</span>
                  <span><strong className="text-blue-300">Operational Review:</strong> Evaluate business processes and efficiencies</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">👥</span>
                  <span><strong className="text-blue-300">Leadership Assessment:</strong> Analyze management team capabilities</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">📜</span>
                  <span><strong className="text-blue-300">Legal Verification:</strong> Confirm compliance and identify liabilities</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <img
              src="st.gif"
              alt="investment analysis"
              width={500}
              height={500}
              className="w-64 h-64 rounded-lg object-cover shadow-blue-500/50 shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Integration Blueprint",
      content: (
        <div className="flex items-center space-x-8 bg-gray-900 p-6 rounded-xl">
          <div className="flex-1">
            <h2 className="mb-4 text-2xl font-bold text-blue-500">
              🤝 Integration Blueprint: Transition to Ownership 📝
            </h2>
            
            <p className="mb-5 text-base text-white">
              The comprehensive roadmap for seamlessly incorporating new acquisitions into existing business infrastructure.
            </p>
            
            <div className="mb-5 border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Why is Integration Planning Vital? 🌟
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🔄</span>
                  <span><strong className="text-blue-300">Continuity Assurance:</strong> Minimizing disruption during ownership transfer</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🤝</span>
                  <span><strong className="text-blue-300">Cultural Cohesion:</strong> Blending organizational values and practices</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">💰</span>
                  <span><strong className="text-blue-300">Synergy Capture:</strong> Realizing projected cost savings and revenue growth</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Critical Phases ⏱️
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">📝</span>
                  <span><strong className="text-blue-300">Documentation:</strong> Securing intellectual property and contractual agreements</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">👋</span>
                  <span><strong className="text-blue-300">Stakeholder Communication:</strong> Managing expectations of all parties</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🧩</span>
                  <span><strong className="text-blue-300">System Consolidation:</strong> Unifying technology and operational frameworks</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">👥</span>
                  <span><strong className="text-blue-300">Team Alignment:</strong> Restructuring for optimal performance</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <img
              src="bp.gif"
              alt="integration blueprint"
              width={500}
              height={500}
              className="w-64 h-64 rounded-lg object-cover shadow-blue-500/50 shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Growth Acceleration",
      content: (
        <div className="flex items-center space-x-8 bg-gray-900 p-6 rounded-xl">
          <div className="flex-1">
            <h2 className="mb-4 text-2xl font-bold text-blue-500">
              🚀 Growth Acceleration: Transformation & Expansion 📈
            </h2>
            
            <p className="mb-5 text-base text-white">
              The strategic amplification of asset value through optimization, innovation, and market penetration.
            </p>
            
            <div className="mb-5 border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Why is Growth Acceleration Essential? 🚀
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">📊</span>
                  <span><strong className="text-blue-300">Return Maximization:</strong> Delivering superior investor outcomes</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🌐</span>
                  <span><strong className="text-blue-300">Market Leadership:</strong> Establishing competitive advantages</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🔄</span>
                  <span><strong className="text-blue-300">Value Creation Cycle:</strong> Generating resources for future investments</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="mb-3 text-xl font-medium text-blue-400">
                Strategic Levers 🔧
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">💡</span>
                  <span><strong className="text-blue-300">Innovation Catalyst:</strong> Introducing new products or services</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🌍</span>
                  <span><strong className="text-blue-300">Market Development:</strong> Expanding into untapped territories</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">⚙️</span>
                  <span><strong className="text-blue-300">Efficiency Engineering:</strong> Streamlining operations for profitability</span>
                </li>
                <li className="flex items-center text-base text-white">
                  <span className="mr-3 text-blue-500">🧠</span>
                  <span><strong className="text-blue-300">Talent Optimization:</strong> Cultivating high-performance teams</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <img
              src="mm.gif"
              alt="growth acceleration"
              width={500}
              height={500}
              className="w-64 h-64 rounded-lg object-cover shadow-blue-500/50 shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
export function TextHoverEffectDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center">
      <TextHoverEffect text="NUKE." />
    </div>
  );
}



const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];

export function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">

      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">

      </p>
    </WavyBackground>
  );
}

export function LampDemoCraft() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[150px] font-medium tracking-tight text-black md:text-7xl"
      >
        WORKS<br />
      </motion.h1>
      <p>scroll to explore</p>
    </LampContainer>
  );
}

export function LampDemoServ() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[150px] font-medium tracking-tight text-black md:text-7xl"
      >
        TASKS <br />
      </motion.h1>
      <p>scroll to explore</p>
    </LampContainer>
  );
}

export function LampDemoTeam() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-[150px] font-medium tracking-tight text-black md:text-7xl"
      >
        TEAM <br />
      </motion.h1>
      <p>scroll to explore</p>
    </LampContainer>
  );
}

export default function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            WE DO THE BEST AT <br/> NUKE MARKETING</span>


        }
        badge={
          <a href="https://peerlist.io/raghavkrishna">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </a>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  )
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 54C42.3594 54 54 42.3594 54 28C54 13.6406 42.3594 2 28 2C13.6406 2 2 13.6406 2 28C2 42.3594 13.6406 54 28 54ZM28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
        fill="#219653"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0769 12H15V46H24.3846V38.8889H27.0769C34.7305 38.8889 41 32.9048 41 25.4444C41 17.984 34.7305 12 27.0769 12ZM24.3846 29.7778V21.1111H27.0769C29.6194 21.1111 31.6154 23.0864 31.6154 25.4444C31.6154 27.8024 29.6194 29.7778 27.0769 29.7778H24.3846Z"
        fill="#24292E"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 11H29.0769C36.2141 11 42 16.5716 42 23.4444C42 30.3173 36.2141 35.8889 29.0769 35.8889H25.3846V43H18V11ZM25.3846 28.7778H29.0769C32.1357 28.7778 34.6154 26.39 34.6154 23.4444C34.6154 20.4989 32.1357 18.1111 29.0769 18.1111H25.3846V28.7778Z"
        fill="white"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 10H29.0769C36.7305 10 43 15.984 43 23.4444C43 30.9048 36.7305 36.8889 29.0769 36.8889H26.3846V44H17V10ZM19 12V42H24.3846V34.8889H29.0769C35.6978 34.8889 41 29.7298 41 23.4444C41 17.1591 35.6978 12 29.0769 12H19ZM24.3846 17.1111H29.0769C32.6521 17.1111 35.6154 19.9114 35.6154 23.4444C35.6154 26.9775 32.6521 29.7778 29.0769 29.7778H24.3846V17.1111ZM26.3846 19.1111V27.7778H29.0769C31.6194 27.7778 33.6154 25.8024 33.6154 23.4444C33.6154 21.0864 31.6194 19.1111 29.0769 19.1111H26.3846Z"
        fill="#24292E"
      ></path>
    </svg>
  )
}









