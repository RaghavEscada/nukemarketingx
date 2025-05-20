"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Heart, Search, Lightbulb, Cpu, CheckCircle
} from "lucide-react";
const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Empathize",
    description: "Your research, your insights",
    icon: Heart,
    color: "#FF6B6B",
    sections: [
      {
        title: "Research Methods",
        points: [
          "User interviews",
          "Observation",
          "Journey mapping",
          "Persona creation",
          "Empathy workshops"
        ]
      },
      {
        title: "Data Collection",
        points: [
          "Qualitative research",
          "Quantitative analysis",
          "Stakeholder interviews",
          "User feedback"
        ]
      },
      {
        title: "Insight Development",
        points: [
          "Pain point identification",
          "User needs mapping",
          "Behavioral patterns",
          "Emotional journey",
          "Context analysis"
        ]
      }
    ]
  },
  {
    id: 2,
    number: "02",
    title: "Define",
    description: "Your problem, your focus",
    icon: Search,
    color: "#4ECDC4",
    sections: [
      {
        title: "Problem Framing",
        points: [
          "Problem statement",
          "How might we",
          "User needs",
          "Success metrics",
          "Project scoping"
        ]
      },
      {
        title: "Analysis",
        points: [
          "Root cause analysis",
          "Needs prioritization",
          "Opportunity mapping",
          "Constraint identification"
        ]
      },
      {
        title: "Goal Setting",
        points: [
          "Project objectives",
          "Success criteria",
          "Measurement framework",
          "Timeline planning"
        ]
      }
    ]
  },
  {
    id: 3,
    number: "03",
    title: "Ideate",
    description: "Your creativity, your solutions",
    icon: Lightbulb,
    color: "#FFD166",
    sections: [
      {
        title: "Divergent Thinking",
        points: [
          "Brainstorming",
          "Mind mapping",
          "Concept sketching",
          "Crazy eights",
          "Idea generation"
        ]
      },
      {
        title: "Frameworks",
        points: [
          "Design sprints",
          "Co-creation sessions",
          "Ideation workshops",
          "Analogous inspiration"
        ]
      },
      {
        title: "Selection",
        points: [
          "Idea evaluation",
          "Prioritization matrix",
          "Feasibility assessment",
          "Concept refinement"
        ]
      }
    ]
  },
  {
    id: 4,
    number: "04",
    title: "Prototype",
    description: "Your concepts, your creation",
    icon: Cpu,
    color: "#6A0572",
    sections: [
      {
        title: "Development Methods",
        points: [
          "Rapid prototyping",
          "Low-fidelity mockups",
          "Interactive wireframes",
          "Digital prototypes",
          "Physical models"
        ]
      },
      {
        title: "Tools",
        points: [
          "Paper prototyping",
          "Digital design tools",
          "3D printing",
          "Code-based prototypes"
        ]
      },
      {
        title: "Refinement",
        points: [
          "Iterative development",
          "Feature prioritization",
          "Technical feasibility",
          "User flow validation"
        ]
      }
    ]
  },
  {
    id: 5,
    number: "05",
    title: "Test",
    description: "Your feedback, your improvements",
    icon: CheckCircle,
    color: "#118AB2",
    sections: [
      {
        title: "Validation Methods",
        points: [
          "User testing",
          "A/B testing",
          "Usability studies",
          "Focus groups",
          "Heuristic evaluation"
        ]
      },
      {
        title: "Analysis",
        points: [
          "Feedback collection",
          "Quantitative metrics",
          "Qualitative insights",
          "Performance analysis"
        ]
      },
      {
        title: "Iteration",
        points: [
          "Design revisions",
          "Solution refinement",
          "Implementation planning",
          "Success validation"
        ]
      }
    ]
  }
];

export default function DesignThinkingProcess() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // Transform calculations
  const x = useTransform(scrollYProgress, [0, 0.85], ["0%", `-${(processSteps.length - 1) * 100}%`]);
  const y = useTransform(scrollYProgress, [0.85, 0.95], ["0vh", "0vh"]);
  const carouselOpacity = useTransform(scrollYProgress, [0.92, 0.98], [1, 0]);
  
  // Progress indicator
  const progressWidth = useTransform(
    scrollYProgress, 
    [0, 0.85], 
    ["0%", "100%"]
  );
  
  return (
    <section ref={targetRef} className="relative h-[1000vh] bg-gradient-to-b from-gray-900 to-black">
      {/* Progress bar */}
      <div className="sticky top-6 left-0 w-full z-50 px-12">
        <motion.div 
          className="h-1 bg-white rounded-full"
          style={{ width: "100%" }}
        >
          <motion.div 
            className="h-full bg-white rounded-full"
            style={{ width: progressWidth }}
          />
        </motion.div>
      </div>
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-start">
        {/* Background heading text */}
        <div className="absolute left-16 top-1/2 transform -translate-y-1/2 text-white max-w-lg z-0 pointer-events-none">
          <h1 className="text-6xl font-NeueMontreal leading-tight">
            Our design
            <br />
            <span className="flex">
              process
            </span>
          </h1>
        </div>
        
        {/* Horizontal carousel */}
        <motion.div
          style={{ x, y, opacity: carouselOpacity }}
          className="flex flex-nowrap h-screen pt-20 pb-0 w-full"
        >
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                className="w-screen min-w-screen flex-shrink-0 h-full px-10 flex items-center justify-center relative"
              >
                {/* Content card */}
                <motion.div 
                  className="bg-white backdrop-blur-sm rounded-3xl shadow-2xl max-w-3xl w-full mx-auto ml-auto mr-12 relative z-20 overflow-hidden h-5/6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                >
                  {/* Icon header */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 flex items-center justify-center rounded-bl-3xl"
                    style={{ backgroundColor: step.color }}
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Number tab */}
                  <div 
                    className="absolute left-12 top-0 rounded-b-xl px-6 py-3 text-lg font-medium border border-t-0 border-gray-200"
                    style={{ backgroundColor: step.color, color: "white" }}
                  >
                    {step.number}
                  </div>
                  
                  {/* Card Content */}
                  <div className="pt-24 px-12 pb-12 h-full overflow-y-auto">
                    <h2 className="text-5xl font-bold text-gray-800">{step.title}</h2>
                    <p className="text-xl font-light italic text-gray-600 mt-2 mb-6">{step.description}</p>
                    
                    <div className="w-32 h-1 rounded-full mb-8" style={{ backgroundColor: step.color }}></div>
                    
                    {/* Sections */}
                    {step.sections.map((section, idx) => (
                      <div key={idx} className="mb-10">
                        <h3 className="text-2xl font-medium text-gray-800 mb-4 flex items-center">
                          <span 
                            className="w-2 h-2 mr-2 rounded-full inline-block"
                            style={{ backgroundColor: step.color }}
                          ></span>
                          {section.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {section.points.map((point, pointIdx) => (
                            <button 
                              key={pointIdx} 
                              className={`px-4 py-2 rounded-full text-gray-700 transition-all duration-300 hover:shadow-md border border-gray-200 hover:border-transparent hover:bg-${step.color}-20`}
                            >
                              {point}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Step indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {processSteps.map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-2 h-2 rounded-full ${i === step.id - 1 ? 'bg-white' : 'bg-white/30'}`}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}