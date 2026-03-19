import { motion } from 'framer-motion';

const BubbleOverlay = () => {
  const bubbles = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 pointer-events-none z-[999] overflow-hidden">
      {bubbles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/30 backdrop-blur-sm"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: '110%', 
            scale: 0,
            opacity: 0 
          }}
          animate={{ 
            y: '-10%', 
            scale: [0, 1.5, 1.2],
            opacity: [0, 0.8, 0] 
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: Math.random() * 0.5,
          }}
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            border: '1px solid rgba(255, 255, 255, 0.5)'
          }}
        />
      ))}
    </div>
  );
};

export default BubbleOverlay;