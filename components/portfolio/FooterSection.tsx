import { motion } from "motion/react";
import Link from "next/link";
import { Mail, GitBranch, ExternalLink } from "lucide-react";
import { footerData, socialLinks } from "../../app/portfolio/data";

export default function FooterSection() {
  return (
    <footer className="p-6 sm:p-8 md:p-12 mt-auto border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6">
          {/* About */}
          <div>
            <h3 className="text-code-keyword text-sm font-medium mb-3">
              About
            </h3>
            <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
              {footerData.about}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-code-keyword text-sm font-medium mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-text-muted hover:text-primary transition-colors text-xs sm:text-sm inline-flex items-center gap-1"
                >
                  <span className="text-code-keyword">→</span> Home
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-text-muted hover:text-primary transition-colors text-xs sm:text-sm inline-flex items-center gap-1"
                >
                  <span className="text-code-keyword">→</span> About
                </a>
              </li>
              {/* <li>
                <a
                  href="#projects"
                  className="text-text-muted hover:text-primary transition-colors text-xs sm:text-sm inline-flex items-center gap-1"
                >
                  <span className="text-code-keyword">→</span> Projects
                </a>
              </li> */}
              <li>
                <a
                  href="#skills"
                  className="text-text-muted hover:text-primary transition-colors text-xs sm:text-sm inline-flex items-center gap-1"
                >
                  <span className="text-code-keyword">→</span> Skills
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-code-keyword text-sm font-medium mb-3">
              Connect
            </h3>
            <div className="flex flex-col space-y-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors text-xs sm:text-sm inline-flex items-center gap-2"
              >
                <GitBranch className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors text-xs sm:text-sm inline-flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={socialLinks.email}
                className="text-text-muted hover:text-primary transition-colors text-xs sm:text-sm inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border-dark/50 pt-4 mt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <motion.p
              className="text-text-muted text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <span className="text-code-comment">
                // {footerData.copyright}
              </span>
            </motion.p>
            <p className="text-text-muted text-xs">
              <span className="text-code-comment">
                // Made with <span className="text-code-string">{"<3"}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
