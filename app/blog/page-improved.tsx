"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "motion/react";
import {
  Calendar,
  Clock,
  BookOpen,
  Search,
  X,
  Pin,
  Filter,
  ArrowUpDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "./data";

type SortOption = "newest" | "oldest";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set(blogPosts.flatMap((post) => post.tags));
    return Array.from(tags).sort();
  }, []);

  // Filter and sort blog posts
  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      posts = posts.filter((post) => {
        const titleMatch = post.title.toLowerCase().includes(query);
        const excerptMatch = post.excerpt.toLowerCase().includes(query);
        const tagsMatch = post.tags.some((tag) =>
          tag.toLowerCase().includes(query)
        );
        const authorMatch = post.author.toLowerCase().includes(query);
        return titleMatch || excerptMatch || tagsMatch || authorMatch;
      });
    }

    // Filter by selected tag
    if (selectedTag) {
      posts = posts.filter((post) => post.tags.includes(selectedTag));
    }

    // Sort posts
    posts = [...posts].sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });

    return posts;
  }, [searchQuery, selectedTag, sortBy]);

  // Separate pinned and regular posts
  const pinnedPosts = useMemo(
    () => filteredPosts.filter((post) => post.pinned),
    [filteredPosts]
  );
  const regularPosts = useMemo(
    () => filteredPosts.filter((post) => !post.pinned),
    [filteredPosts]
  );

  // Keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        const searchInput = document.querySelector(
          'input[type="text"]'
        ) as HTMLInputElement;
        searchInput?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`;

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background text-text-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <Link
            href="/"
            className="text-text-muted hover:text-primary transition-colors inline-flex items-center gap-2 text-sm sm:text-base mb-6"
          >
            <span className="text-code-keyword">←</span>
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-light">
              My Blog
            </h1>
          </div>
          <p className="text-text-muted text-sm sm:text-base">
            Personal experiences, thoughts, and insights
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts... (Press Cmd/Ctrl + K)"
              className="w-full pl-10 pr-10 py-3 bg-surface-dark border border-border-dark rounded-lg text-text-light placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm sm:text-base"
              aria-label="Search blog posts"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-light transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="mt-2 text-xs sm:text-sm text-text-muted">
              Found {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "post" : "posts"} for "{searchQuery}
              "
            </p>
          )}
        </motion.div>

        {/* Filters and Sort */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="w-4 h-4 text-text-muted mr-1" />
              <span className="text-xs text-text-muted mr-2">Filter:</span>
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedTag === null
                    ? "bg-primary text-black"
                    : "bg-surface-dark text-text-muted hover:bg-surface-dark/80 hover:text-text-light border border-border-dark"
                }`}
                aria-label="Show all posts"
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() =>
                    setSelectedTag(selectedTag === tag ? null : tag)
                  }
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedTag === tag
                      ? "bg-primary text-black"
                      : "bg-surface-dark text-text-muted hover:bg-surface-dark/80 hover:text-text-light border border-border-dark"
                  }`}
                  aria-label={`Filter by ${tag}`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-text-muted" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-surface-dark border border-border-dark rounded-lg px-3 py-1.5 text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors cursor-pointer"
                aria-label="Sort posts"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Pinned Posts Section */}
        {pinnedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <Pin className="w-5 h-5 text-primary fill-primary" />
              <h2 className="text-lg sm:text-xl font-bold text-text-light">
                Featured Posts
              </h2>
            </div>
            <div className="space-y-6">
              {pinnedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-surface-dark border border-primary/30 rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Thumbnail Image */}
                      {post.thumbnail && (
                        <div className="relative w-full sm:w-48 md:w-56 h-48 sm:h-auto sm:flex-shrink-0 overflow-hidden">
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 192px, 224px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex-1 p-4 sm:p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Pin className="w-4 h-4 text-primary fill-primary flex-shrink-0" />
                          <h2 className="text-xl sm:text-2xl font-bold text-text-light group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>
                        </div>
                        <p className="text-text-muted text-sm sm:text-base mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-text-muted">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Posts Section */}
        {regularPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: pinnedPosts.length > 0 ? 0.3 : 0.2,
            }}
            className={pinnedPosts.length > 0 ? "mt-8 sm:mt-12" : ""}
          >
            {pinnedPosts.length > 0 && (
              <div className="mb-4">
                <h2 className="text-lg sm:text-xl font-bold text-text-light">
                  All Posts
                </h2>
              </div>
            )}
            <div className="space-y-6">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-surface-dark border border-border-dark rounded-lg overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Thumbnail Image */}
                      {post.thumbnail && (
                        <div className="relative w-full sm:w-48 md:w-56 h-48 sm:h-auto sm:flex-shrink-0 overflow-hidden">
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 192px, 224px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex-1 p-4 sm:p-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-text-light mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-text-muted text-sm sm:text-base mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-text-muted">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Empty States */}
        {blogPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-text-muted opacity-50" />
            <p className="text-text-muted text-sm sm:text-base">
              No blog posts yet. Start writing!
            </p>
          </motion.div>
        )}

        {blogPosts.length > 0 && filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Search className="w-12 h-12 mx-auto mb-4 text-text-muted opacity-50" />
            <p className="text-text-muted text-sm sm:text-base mb-2">
              No posts found matching "{searchQuery}"
            </p>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag(null);
                }}
                className="text-primary hover:text-primary/80 text-sm underline"
              >
                Clear filters
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

