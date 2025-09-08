import { motion } from "framer-motion";

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <motion.div
        className="absolute w-20 h-20 bg-blue-500/10 rounded-full"
        style={{ top: "10%", left: "10%" }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-16 h-16 bg-purple-500/10 rounded-full"
        style={{ top: "60%", right: "15%" }}
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute w-12 h-12 bg-green-500/10 rounded-full"
        style={{ bottom: "20%", left: "20%" }}
        animate={{
          y: [0, -10, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating squares */}
      <motion.div
        className="absolute w-8 h-8 bg-indigo-500/10 rotate-45"
        style={{ top: "30%", right: "25%" }}
        animate={{
          rotate: [45, 135, 45],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-6 h-6 bg-pink-500/10 rotate-45"
        style={{ bottom: "40%", right: "10%" }}
        animate={{
          rotate: [45, -45, 45],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
};
