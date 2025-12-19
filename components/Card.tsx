import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

type CardProps = {
  title: string;
  titlePrefix?: string;
  titleSuffix?: string;
  description?: string;
  url: string;
  index?: number;
};

export default function Card({
  title,
  titlePrefix,
  titleSuffix,
  description,
  url,
  index,
}: CardProps) {
  const safeTitlePrefix = titlePrefix ?? title;
  const safeTitleSuffix = titleSuffix ?? "";

  let displayUrl = url;
  try {
    const urlObj = new URL(url);
    displayUrl = urlObj.hostname.replace("www.", "");
  } catch {
    // Fallback: leave full URL string
    displayUrl = url;
  }

  const delay =
    typeof index === "number" ? (index * 100).toString() : undefined;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card border border-border-dark rounded-lg p-4 md:p-5 bg-surface-dark/50 hover:bg-surface-dark transition-all hover:border-primary/50 group block cursor-pointer relative"
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
        {/* External link icon in top right */}
        <ExternalLink className="absolute top-0 right-0 h-4 w-4 text-text-muted opacity-60 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />

        {/* Title */}
        <div className="mb-3 pr-6">
          <h3 className="text-base md:text-lg font-medium leading-tight">
            {safeTitleSuffix ? (
              <>
                <span className="text-code-variable">{safeTitlePrefix}</span>
                <span className="text-text-muted">{safeTitleSuffix}</span>
              </>
            ) : (
              <span className="text-code-variable">{safeTitlePrefix}</span>
            )}
          </h3>
        </div>

        {/* Description */}
        {description && (
          <p className="text-text-muted text-sm mb-3 leading-relaxed line-clamp-2">
            {description}
          </p>
        )}

        {/* URL */}
        <div className="text-text-muted text-xs opacity-70">{displayUrl}</div>
      </div>
    </motion.a>
  );
}
