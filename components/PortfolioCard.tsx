import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

type PortfolioCardProps = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  index?: number;
};

export default function PortfolioCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  index,
}: PortfolioCardProps) {
  const delay =
    typeof index === "number" ? (index * 100).toString() : undefined;

  return (
    <motion.div
      className="border border-border-dark rounded-lg p-4 md:p-5 bg-surface-dark/50 hover:bg-surface-dark transition-all hover:border-primary/50 group block cursor-pointer relative"
      data-aos="fade-up"
      data-aos-delay={delay}
      whileHover={{
        y: -4,
        scale: 1.02,
        boxShadow: "0 0 25px rgba(56,189,248,0.25)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
    >
      <div className="relative">
        {/* Links in top right */}
        <div className="absolute top-0 right-0 flex gap-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-text-muted opacity-60 hover:text-primary transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-text-muted opacity-60 hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Title */}
        <div className="mb-3 pr-8">
          <h3 className="text-base md:text-lg font-medium leading-tight text-code-variable">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-text-muted text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-primary/20 text-primary rounded border border-primary/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
