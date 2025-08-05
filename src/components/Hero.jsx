import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="flex flex-col md:flex-row justify-between items-center min-h-screen px-6 md:px-32 bg-dark text-white gap-8 md:gap-0"
      id="hero"
    >
      {/* Left Side - Text */}
      <div className="max-w-lg text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Unlock the Potential of Flutter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 text-base md:text-lg text-gray-300"
        >
          Your Premier Partner for Cross-Platform App Excellence!
        </motion.p>

        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button className="bg-cyan-500 px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 hover:shadow-[0_0_15px_rgba(6,182,212,0.8)] transition">
            UPGRADE YOUR TECH
          </button>
        </motion.div>
      </div>

      {/* Right Side - Image */}
      <motion.img
        src="/photo-1515879218367-8466d910aaa4.jpeg"
        alt="Flutter code"
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        whileHover={{ scale: 1.05, rotate: 1 }}
        className="w-full md:w-[500px] max-w-sm md:max-w-none rounded-lg shadow-lg"
      />
    </section>
  );
}
