// Blog posts data structure
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
  thumbnail?: string; // Optional thumbnail image URL
  pinned?: boolean; // Optional pinned post flag
}

// Sample blog posts - in production, these would come from MDX files
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Golang",
    slug: "getting-started-with-golang",
    excerpt:
      "My journey learning Go and building scalable backend systems. Sharing tips and experiences from real projects.",
    date: "2024-01-15",
    author: "Rizkirmdhn",
    tags: ["Golang", "Backend", "Programming"],
    readTime: "5 min read",
    thumbnail: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F35jf00pbs6k5k112mc8t.jpg",
    pinned: true, // Pinned post
  },
  {
    id: "2",
    title: "Building a Homelab with Proxmox",
    slug: "building-homelab-proxmox",
    excerpt:
      "Setting up a personal homelab infrastructure using Proxmox for virtualization and containerization.",
    date: "2024-02-20",
    author: "Rizkirmdhn",
    tags: ["Homelab", "Proxmox", "DevOps"],
    readTime: "8 min read",
    thumbnail: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F35jf00pbs6k5k112mc8t.jpg", // Add your thumbnail path
  },
  {
    id: "3",
    title: "My Experience with Next.js 16",
    slug: "nextjs-16-experience",
    excerpt:
      "Exploring the new features in Next.js 16 and how they improve the developer experience.",
    date: "2024-03-10",
    author: "Rizkirmdhn",
    tags: ["Next.js", "Frontend", "React"],
    readTime: "6 min read",
    thumbnail: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F35jf00pbs6k5k112mc8t.jpg", // Add your thumbnail path
  },
];

