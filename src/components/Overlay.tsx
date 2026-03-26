"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"]
  });

  // Section 1: 0% to 15% (fade in max 0-5%, fade out 10-15%)
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.15], [1, 1, 1, 0]);

  // Section 2: 25% to 45%
  const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);

  // Section 3: 55% to 80%
  const y3 = useTransform(scrollYProgress, [0.55, 0.8], [50, -50]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-screen z-10 flex flex-col justify-center">
      
      {/* Section 1 */}
      <motion.div 
        style={{ y: y1, opacity: opacity1 }}
        className="absolute w-full flex justify-center text-center px-6"
      >
        <div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
            Sarveshwara Rao
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
            Software & ML Engineer.
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        style={{ y: y2, opacity: opacity2 }}
        className="absolute w-full flex justify-start pl-[10%] pr-6 md:pl-[15%]"
      >
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white drop-shadow-xl">
            I build intelligent <br/> data-driven applications.
          </h2>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        style={{ y: y3, opacity: opacity3 }}
        className="absolute w-full flex justify-end pr-[10%] pl-6 md:pr-[15%]"
      >
        <div className="max-w-2xl text-right">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white drop-shadow-xl">
            Bridging machine learning <br />
            <span className="text-white/60 italic">and software engineering.</span>
          </h2>
        </div>
      </motion.div>

    </div>
  );
}
