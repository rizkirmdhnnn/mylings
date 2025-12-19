import { motion } from "motion/react";
import { Mail, MapPin, Calendar, Code } from "lucide-react";
import { profileData, socialLinks } from "../../app/portfolio/data";

export default function ProfileSection() {
  return (
    <motion.section
      id="about"
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-text-light break-words">
        <span className="text-code-keyword">type</span>{" "}
        <span className="text-code-variable">about</span>{" "}
        <span className="text-code-type">struct</span>{" "}
        <span className="text-text-muted">{"{"}</span>
      </h2>
      <div className="border border-border-dark rounded-lg p-4 sm:p-6 bg-surface-dark/50 hover:bg-surface-dark transition-all hover:border-primary/50">
        <div className="mb-4">
          <h3 className="text-code-variable text-base sm:text-lg font-medium mb-2">
            {profileData.name}
          </h3>
          <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-4">
            {profileData.bio}
          </p>
        </div>

        {/* Contact & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-code-keyword text-xs block mb-1">
                Location
              </span>
              <p className="text-text-muted text-sm">{profileData.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-code-keyword text-xs block mb-1">
                Email
              </span>
              <a
                href={socialLinks.email}
                className="text-text-muted text-xs sm:text-sm hover:text-primary transition-colors break-all"
              >
                {profileData.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-code-keyword text-xs block mb-1">
                Experience
              </span>
              <p className="text-text-muted text-sm">{profileData.experience}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Code className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-code-keyword text-xs block mb-1">
                Interests
              </span>
              <p className="text-text-muted text-sm">{profileData.interests}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

