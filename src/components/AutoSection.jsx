import { motion } from "framer-motion";

export default function AutoSection() {
  return (
    <section
      className="bg-dark text-white px-6 lg:px-32 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      id="about"
    >
      {/* Left Side - Heading */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center lg:text-left"
      >
        <h2 className="text-3xl lg:text-5xl font-bold mb-2">Flutter's Dawn</h2>
        <p className="text-gray-400 text-base lg:text-lg">History of flutter</p>
      </motion.div>

      {/* Right Side - Content + Button */}
      <motion.div
        className="flex flex-col gap-6 text-center lg:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
          Uncover the fascinating story of Flutter in 'Flutter’s Dawn: History of Flutter.’ 
          From humble origins to global acclaim, delve into its captivating narrative. 
          Explore milestones, triumphs, and challenges. Whether tech enthusiast or curious 
          mind, join us on this captivating journey!{" "}
          <a href="#" className="text-cyan-400 underline">Click to begin!</a>
        </p>

        <div className="flex justify-center lg:justify-start">
          <button className="flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition">
            BEGIN
            <span className="text-2xl">↗</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
