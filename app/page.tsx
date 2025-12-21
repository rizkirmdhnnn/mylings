"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Card from "../components/Card";
import links from "../links.json";

const PROFILE_IMAGE_SRC =
  "https://scontent-cgk2-1.xx.fbcdn.net/v/t39.30808-6/586328428_2025818961528853_5594106837072080406_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE2CdDHkkn9AFpILOhpxQFc2_ifHnwZGNLb-J8efBkY0q9vZt-yeqUSxhnXMLA6fqSmYvB0HOYZ-q9Khr3SX_k8&_nc_ohc=vqq3W1EzJLoQ7kNvwFBEypN&_nc_oc=AdnC8KjMufENp-beq_1_qVwm6hiugtbGlyQGnR2ug3P_k4J1DwthvCvkIXKaf9JY2Bk&_nc_zt=23&_nc_ht=scontent-cgk2-1.xx&_nc_gid=-c2bouga_-jPjGn2DUTUtg&oh=00_Afn0johYNn1fMxldFHZN7QngfcXH0je2UG-QW6lm5T45SA&oe=69494D30";

export default function Home() {
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <div className="bg-background-dark text-text-light font-mono antialiased min-h-screen selection:bg-primary selection:text-background-dark">
      <div className="flex flex-col min-h-screen">
        <header className="p-4 md:p-8">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex flex-col items-center text-center pt-10">
              <motion.button
                type="button"
                className="mb-4 md:mb-6 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                data-aos="zoom-in"
                data-aos-duration="600"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowImageModal(true)}
                aria-label="View profile picture in detail"
              >
                <Image
                  src={PROFILE_IMAGE_SRC}
                  alt="Profile Picture"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary/50 object-cover bg-surface-dark"
                  width={128}
                  height={128}
                />
              </motion.button>
              <h1
                className="text-2xl md:text-3xl font-bold mb-2 text-text-light"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Rizkirmdhn
              </h1>
              <p
                className="text-text-muted text-sm md:text-base max-w-lg mx-auto leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="bg-primary text-black inline-block">
                  Backend Developer • Homelab Enthusiast • Runner
                </span>
                <br />
                Sharing useful resources and projects
              </p>
              <motion.div
                className="mt-6 flex gap-3 flex-wrap justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Link
                  href="/portfolio"
                  className="text-text-muted hover:text-primary transition-colors text-sm inline-flex items-center gap-2 border border-border-dark hover:border-primary/50 px-4 py-2 rounded bg-surface-dark/50 hover:bg-surface-dark"
                >
                  <span className="text-code-keyword">view</span>
                  <span className="text-code-variable">portfolio</span>
                  <span className="text-text-muted">→</span>
                </Link>
                <Link
                  href="/blog"
                  className="text-text-muted hover:text-primary transition-colors text-sm inline-flex items-center gap-2 border border-border-dark hover:border-primary/50 px-4 py-2 rounded bg-surface-dark/50 hover:bg-surface-dark"
                >
                  <span className="text-code-keyword">read</span>
                  <span className="text-code-variable">blog</span>
                  <span className="text-text-muted">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </header>
        <main className="flex-1 scrollbar-thin">
          <div className="p-4 md:p-6">
            <div className="max-w-7xl mx-auto w-full">
              <div id="empty-state" className="hidden text-center py-12">
                <span className="material-symbols-outlined text-text-muted text-4xl mb-4">
                  link_off
                </span>
                <p className="text-text-muted">No links available yet.</p>
              </div>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                id="links-container"
              >
                {links.map((link) => (
                  <Card
                    key={link.id}
                    title={link.title}
                    titlePrefix={link.titlePrefix}
                    titleSuffix={link.titleSuffix}
                    description={link.description}
                    url={link.url}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <AnimatePresence>
        {showImageModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowImageModal(false)}
          >
            <motion.div
              className="relative max-w-sm md:max-w-lg w-full px-4"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={PROFILE_IMAGE_SRC}
                alt="Profile Picture large"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl border border-primary/60 object-cover bg-surface-dark"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="script.js"></script>
    </div>
  );
}
