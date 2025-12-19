import { motion } from "motion/react";
import Link from "next/link";

export default function PortfolioHeader() {
  return (
    <header className="p-3 sm:p-4 md:p-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex flex-col items-center text-center pt-6 sm:pt-8 md:pt-10">
          {/* Navigation back to home */}
          <motion.div
            className="mb-6 sm:mb-8 w-full max-w-4xl px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="text-text-muted hover:text-primary transition-colors inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <span className="text-code-keyword">←</span>
              <span>Back to Home</span>
            </Link>
          </motion.div>

          <motion.h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-text-light break-words px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="text-code-keyword">type</span>{" "}
            <span className="text-code-variable">Portfolio</span>{" "}
            <span className="text-code-type">struct</span>{" "}
            <span className="text-text-muted">{"{"}</span>
          </motion.h1>
          <motion.p
            className="text-text-muted text-xs sm:text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="bg-primary text-black inline-block px-2 py-1 break-words">
              Selected Projects & Work
            </span>
          </motion.p>
        </div>
      </div>
    </header>
  );
}

