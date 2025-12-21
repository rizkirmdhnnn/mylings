"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Share2, Check } from "lucide-react";

interface UniversalShareButtonProps {
  url: string;
  title: string;
  description?: string;
  variant?: "icon" | "button";
  className?: string;
}

export default function UniversalShareButton({
  url,
  title,
  description,
  variant = "button",
  className = "",
}: UniversalShareButtonProps) {
  const [isSupported, setIsSupported] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  // Check if Web Share API is supported
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSupported("share" in navigator);
    }
  }, []);

  const handleShare = async () => {
    // Use Web Share API if available
    if (navigator.share) {
      try {
        setIsSharing(true);
        await navigator.share({
          title,
          text: description || title,
          url,
        });
        setIsSharing(false);
      } catch (err) {
        // User cancelled or error occurred
        setIsSharing(false);
        // Don't show error if user cancelled
        if ((err as Error).name !== "AbortError") {
          // Fallback to copy if share fails
          await copyToClipboard();
        }
      }
    } else {
      // Fallback: copy to clipboard
      await copyToClipboard();
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      textArea.style.pointerEvents = "none";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Failed to copy:", fallbackErr);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  if (variant === "icon") {
    return (
      <motion.button
        onClick={handleShare}
        disabled={isSharing}
        className={`
          flex items-center justify-center
          w-9 h-9 sm:w-10 sm:h-10
          bg-surface-dark border border-border-dark rounded-lg
          text-text-muted hover:text-white
          hover:bg-primary/20 hover:border-primary/50
          transition-all duration-200
          touch-manipulation
          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className}
        `}
        aria-label={isSupported ? "Share via native share" : "Copy link"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.div
              key="check"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Check className="w-5 h-5 text-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="share"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Share2 className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={handleShare}
      disabled={isSharing}
      className={`
        flex items-center gap-2
        px-4 py-2
        bg-surface-dark border border-border-dark rounded-lg
        text-text-muted hover:text-text-light
        hover:border-primary/50
        transition-all duration-200
        text-sm
        touch-manipulation
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      aria-label={isSupported ? "Share via native share" : "Copy link"}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="copied"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <Check className="w-4 h-4 text-primary" />
            <span className="text-primary">Copied!</span>
          </motion.div>
        ) : (
          <motion.div
            key="share"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            {isSharing ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Share2 className="w-4 h-4" />
                </motion.div>
                <span>Sharing...</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>{isSupported ? "Share" : "Copy Link"}</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

