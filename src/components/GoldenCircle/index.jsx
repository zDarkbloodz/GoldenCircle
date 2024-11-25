import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GlassCardsCircle = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

const sections = {
    why: {
      title: "WHY",
      color: "bg-gradient-to-br from-blue-600/80 via-blue-500/50 to-cyan-400/30",
      borderColor: "border-cyan-400/30",
      size: "w-[20rem] h-[20rem]",
      position: "z-30",
      mainStatement: "Empowering and transforming lives through technology and creativity",
      details: [
        {
          title: "Purpose-Driven Innovation",
          content: "Creating AI solutions that make a tangible difference in people's lives, focusing on human empowerment rather than replacement."
        },
        {
          title: "Veteran's Perspective",
          content: "Applying military discipline and service-oriented mindset to create technology that serves humanity."
        },
        {
          title: "Transformative Vision",
          content: "Building systems that enhance accessibility, creativity, and opportunities for everyone."
        },
        {
          title: "Human-Centric Technology",
          content: "Developing AI as an extension of our best selves, amplifying human potential and capabilities."
        }
      ]
    },
    how: {
      title: "HOW",
      color: "bg-gradient-to-br from-indigo-600/80 via-purple-500/50 to-blue-400/30",
      borderColor: "border-blue-400/30",
      size: "w-[30rem] h-[30rem]",
      position: "z-20",
      mainStatement: "Bridging vision and reality through expertise, experience, and collaboration",
      details: [
        {
          title: "Advanced Knowledge",
          content: "Computer Science degree with AI specialization, continuous learning in emerging technologies"
        },
        {
          title: "Military Discipline",
          content: "25U Army experience bringing structure, problem-solving, and mission-first mentality"
        },
        {
          title: "Creative Innovation",
          content: "Combining technical expertise with imaginative thinking for breakthrough solutions"
        },
        {
          title: "Network Building",
          content: "Creating strong professional connections and collaborative opportunities"
        }
      ]
    },
    what: {
      title: "WHAT",
      color: "bg-gradient-to-br from-violet-600/80 via-indigo-500/50 to-purple-400/30",
      borderColor: "border-purple-400/30",
      size: "w-[40rem] h-[40rem]",
      position: "z-10",
      mainStatement: "Delivering transformative AI solutions and inspiring positive change",
      details: [
        {
          title: "AI Systems",
          content: "Developing intelligent solutions for education, manufacturing, and creative industries"
        },
        {
          title: "Interactive Platforms",
          content: "Creating immersive experiences combining AI, VR, and gaming technologies"
        },
        {
          title: "Knowledge Sharing",
          content: "Contributing to the tech community through workshops, blogs, and educational content"
        },
        {
          title: "Ethical Framework",
          content: "Establishing standards for responsible AI development and implementation"
        }
      ]
    }
  };


  const DetailCard = ({ detail, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="transform transition-all duration-300 hover:scale-105 relative group"
    >
      <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg overflow-hidden">
        {/* Card glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-x" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-200 transition-colors duration-300">
            {detail.title}
          </h3>
          <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
            {detail.content}
          </p>
        </div>
        
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-xl animate-pulse" />
        </div>
      </div>
    </motion.div>
  );

  const FloatingParticle = ({ index }) => {
    const randomDelay = Math.random() * 4;
    const randomDuration = 10 + Math.random() * 10;
    const randomSize = 1 + Math.random() * 5;
    
    return (
      <motion.div
        className="absolute w-1 h-1 bg-white/5 rounded-full"
        initial={{ 
          x: -10,
          y: Math.random() * window.innerHeight,
          opacity: 3 
        }}
        animate={{ 
          x: window.innerWidth + 10,
          y: Math.random() * window.innerHeight,
          opacity: [1, 1, 1, 1],
        }}
        transition={{
          duration: randomDuration,
          delay: randomDelay,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    );
  };

  const WindEffect = () => {
    const particles = Array.from({ length: 50 }, (_, i) => i);
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((i) => (
          <FloatingParticle key={i} index={i} />
        ))}
      </div>
    );
  };

  const DetailPanel = ({ section }) => {
    if (!section) return null;
    const data = sections[section];

    return (
      <motion.div 
        className="fixed inset-0 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
          onClick={() => {
            setShowDetails(false);
            setActiveSection(null);
          }}
        />
        <motion.div 
          className="relative max-w-5xl w-full mx-8 bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent rounded-2xl animate-pulse" />
          
          <button 
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            onClick={() => {
              setShowDetails(false);
              setActiveSection(null);
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <motion.h2 
            className="text-4xl font-bold mb-2 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {data.title}
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-white/90"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {data.mainStatement}
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.details.map((detail, idx) => (
              <DetailCard key={idx} detail={detail} index={idx} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const Circle = ({ type }) => {
    const section = sections[type];
    const isHovered = activeSection === type;
    const shouldShow = !activeSection || isHovered;

    return (
      <motion.div
        className={`
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          ${section.size}
          rounded-full
          ${section.color}
          border-2 ${section.borderColor}
          transition-all duration-500 ease-out
          ${section.position}
          ${shouldShow ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          cursor-pointer
          backdrop-blur-sm
          shadow-lg
        `}
        animate={{
          boxShadow: isHovered 
            ? '0 0 50px rgba(255, 255, 255, 0.2)' 
            : '0 0 30px rgba(0, 0, 0, 0.2)',
        }}
        onMouseEnter={() => !showDetails && setActiveSection(type)}
        onMouseLeave={() => !showDetails && setActiveSection(null)}
        onClick={() => {
          setActiveSection(type);
          setShowDetails(true);
        }}
      >
        <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-white/5 to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h2 
            className="text-4xl font-bold tracking-wider text-white drop-shadow-lg"
            animate={{
              scale: isHovered ? 1.1 : 1,
              transition: { duration: 0.3 }
            }}
          >
            {section.title}
          </motion.h2>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(125,211,252,0.1) 1px, transparent 1px),
              linear-gradient(to right, rgba(125,211,252,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(125,211,252,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      <WindEffect />

      {/* Ambient light */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" 
           style={{ animation: 'pulse 4s ease-in-out infinite' }} />

      <div className="relative w-full h-full flex items-center justify-center">
        <Circle type="what" />
        <Circle type="how" />
        <Circle type="why" />
      </div>

      {showDetails && <DetailPanel section={activeSection} />}
    </div>
  );
};

export default GlassCardsCircle;
