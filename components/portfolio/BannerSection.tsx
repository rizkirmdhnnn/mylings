import { motion } from "motion/react";
import { Mail, ExternalLink } from "lucide-react";
import { bannerData } from "../../app/portfolio/data";

export default function BannerSection() {
  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
    >
      <div className="border border-primary/50 rounded-lg p-6 sm:p-8 md:p-10 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-code-variable text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-text-light">
                {bannerData.title}{" "}
                <span className="text-primary">{bannerData.highlight}</span>?
              </h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4">
                I specialize in building scalable backend systems with{" "}
                <span className="text-code-variable">Golang</span>,{" "}
                <span className="text-code-variable">Laravel</span>, and modern
                infrastructure. Let's build something amazing together.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {bannerData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-primary/20 text-primary rounded border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={bannerData.ctaEmail}
                className="px-6 py-3 bg-primary text-black rounded-lg font-medium text-sm sm:text-base hover:bg-primary/90 transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
              <a
                href={bannerData.ctaProjects}
                className="px-6 py-3 border border-primary/50 text-primary rounded-lg font-medium text-sm sm:text-base hover:bg-primary/10 transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                View Projects
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

