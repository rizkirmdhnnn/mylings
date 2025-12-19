import { motion } from "motion/react";
import { skillsData, skillsCategories } from "../../app/portfolio/data";

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-text-light break-words">
        <span className="text-code-keyword">var</span>{" "}
        <span className="text-code-variable">skills</span>{" "}
        <span className="text-code-type">[]string</span>{" "}
        <span className="text-text-muted">=</span>{" "}
        <span className="text-code-string">[]string</span>
        <span className="text-text-muted">{"{"}</span>
        <span className="text-text-muted">{"}"}</span>
      </h2>
      <div className="border border-border-dark rounded-lg p-4 sm:p-6 bg-surface-dark/50 hover:bg-surface-dark transition-all hover:border-primary/50">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <span
                key={index}
                className="text-xs px-3 py-1.5 bg-primary/20 text-primary rounded-full border border-primary/30 hover:bg-primary/30 transition-colors cursor-default inline-flex items-center gap-1.5"
              >
                <IconComponent className="w-3 h-3" />
                {skill.name}
              </span>
            );
          })}
        </div>
        <div className="mt-4 pt-4 border-t border-border-dark/50">
          <p className="text-text-muted text-xs">
            <span className="text-code-comment">// {skillsCategories}</span>
          </p>
        </div>
      </div>
    </motion.section>
  );
}

