import React, { memo } from 'react';
import { motion } from 'framer-motion';

const Circle = memo(({ type, section, isActive, onMouseEnter, onMouseLeave, onClick }) => {
  // Enhanced positioning logic for better layering
  const getPosition = () => {
    const positions = {
      why: {
        transform: 'translate(-50%, -50%)',
        zIndex: 30
      },
      how: {
        transform: 'translate(-50%, -50%)',
        zIndex: 20
      },
      what: {
        transform: 'translate(-50%, -50%)',
        zIndex: 10
      }
    };
    return positions[type];
  };

  // Enhanced gradient settings for better visibility
  const getGradient = () => {
    const gradients = {
      why: "bg-gradient-radial from-red-500/90 via-red-500/70 to-cyan-500/60",
      how: "bg-gradient-radial from-cyan-500/90 via-cyan-500/70 to-pink-500/60",
      what: "bg-gradient-radial from-pink-500/90 via-pink-500/70 to-blue-500/60"
    };
    return gradients[type];
  };

  return (
    <motion.div
      className={`
        absolute left-1/2 top-1/2
        ${section.size}
        rounded-full
        ${getGradient()}
        border-2 border-white/20
        cursor-pointer
        backdrop-blur-sm
        hover:shadow-lg hover:shadow-white/10
      `}
      style={getPosition()}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ 
        opacity: isActive ? 1 : 0.85,
        scale: isActive ? 1.05 : 1,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`${section.title} section`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.h2 
          className="text-4xl font-bold tracking-wider text-white drop-shadow-lg"
          animate={{
            opacity: isActive ? 1 : 0.9,
            scale: isActive ? 1.1 : 1
          }}
        >
          {section.title}
        </motion.h2>
      </div>
      
      {/* Add subtle inner glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-white/5 to-transparent opacity-50" />
    </motion.div>
  );
});

export default Circle;