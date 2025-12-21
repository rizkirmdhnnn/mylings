import { notFound } from "next/navigation";
import { blogPosts } from "../data";
import BlogPostClient from "../../../components/blog/BlogPostClient";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Dynamically import MDX file based on slug
  let Post;
  try {
    const module = await import(`@/content/blog/${slug}.mdx`);
    Post = module.default;
  } catch (error) {
    // If MDX file doesn't exist, show a placeholder
    Post = () => (
      <div className="text-text-muted">
        <p>MDX file not found for this post. Please create the file at:</p>
        <code className="bg-surface-dark px-2 py-1 rounded">
          content/blog/{slug}.mdx
        </code>
      </div>
    );
  }

  return (
    <BlogPostClient post={post}>
      <Post />
    </BlogPostClient>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;
