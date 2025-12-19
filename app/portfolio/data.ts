import {
  Code,
  Layers,
  Palette,
  Flame,
  GitBranch,
  Server,
  Box,
  Network,
} from "lucide-react";

// ============================================
// PORTFOLIO DATA - Easy to update
// ============================================

// Profile Information
export const profileData = {
  name: "Rizkirmdhn",
  bio: "Backend developer passionate about building scalable systems and exploring homelab technologies. Enjoys running and staying active. Currently focused on Go development and infrastructure automation.",
  location: "Indonesia",
  email: "achmadrizkiramadhan0101@gmail.com",
  experience: "2+ Years",
  interests: "Backend Dev • Homelab • Running",
};

// Social Links
export const socialLinks = {
  github: "https://github.com/rizkirmdhnnn/",
  linkedin: "https://linkedin.com/in/achmadrizkirmdhn/",
  twitter: "https://twitter.com/rizkirmdhnnn",
  email: "mailto:achmadrizkiramadhan0101@gmail.com",
};

// Skills List
export const skillsData = [
  { name: "Golang", icon: Code },
  { name: "Next.js", icon: Layers },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Laravel", icon: Flame },
  { name: "Git", icon: GitBranch },
  { name: "Proxmox", icon: Server },
  { name: "Docker", icon: Box },
  { name: "Kubernetes", icon: Network },
];

// Skills Categories (for comment display)
export const skillsCategories = "Backend • Frontend • Fullstack • Tools • Homelab";

// Certifications
export const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://example.com/cert",
  },
  {
    id: 2,
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
  },
];

// Portfolio Projects
export const portfolioItems = [
  {
    id: 1,
    title: "Project One",
    description:
      "A full-stack web application built with modern technologies. Features include real-time updates, user authentication, and responsive design.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one.vercel.app",
  },
  {
    id: 2,
    title: "Project Two",
    description:
      "An API service with microservices architecture. Handles high traffic loads and provides RESTful endpoints for client applications.",
    technologies: ["Node.js", "Express", "Docker", "Redis", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "A CLI tool for developers to streamline their workflow. Built with performance and developer experience in mind.",
    technologies: ["Rust", "CLI", "Git"],
    githubUrl: "https://github.com/yourusername/project-three",
    liveUrl: "https://project-three.com",
  },
];

// Banner/CTA Content
export const bannerData = {
  title: "Looking for a",
  highlight: "Backend Developer",
  description:
    "I specialize in building scalable backend systems with Golang, Laravel, and modern infrastructure. Let's build something amazing together.",
  descriptionHighlight: ["Golang", "Laravel"], // Words to highlight with code-variable style
  tags: ["API Development", "Microservices", "Infrastructure", "DevOps"],
  ctaEmail: "mailto:achmadrizkiramadhan0101@gmail.com",
  ctaProjects: "#projects",
};

// Footer Data
export const footerData = {
  about:
    "Backend developer passionate about building scalable systems and exploring homelab technologies.",
  copyright: `© ${new Date().getFullYear()} Rizkirmdhn. Built with Go & Next.js`,
};

