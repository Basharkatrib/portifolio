import React from 'react';
import { motion } from 'framer-motion';

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full group"
    >
      <div className="relative flex items-center">
        <div className="flex-1">
          <div className="h-full bg-zinc-900/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/50 hover:border-red-500/20 transition-all duration-300">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
                  {subTitle}
                </p>
              </div>
              <div className="shrink-0">
                <span className="px-4 py-2 bg-red-600/10 text-red-500 rounded-full font-medium">
                  {result}
                </span>
              </div>
            </div>
            <p className="mt-4 text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              {des}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeCard;