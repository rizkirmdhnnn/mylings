"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  children?: React.ReactNode;
  className?: string;
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Extract language from className (e.g., "language-go" -> "go")
  const language = className?.replace("language-", "") || "text";

  // Get code content as string
  const codeString =
    typeof children === "string"
      ? children
      : String(children?.toString() || "");

  // Split into lines for line numbers
  const lines = codeString.split("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="my-4 sm:my-6 rounded-lg overflow-hidden border border-border-dark bg-[#1e1e1e] shadow-lg -mx-2 sm:mx-0">
      {/* Code Editor Header */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-1.5 sm:py-2 bg-[#252526] border-b border-border-dark">
        <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
          <div className="flex gap-1 sm:gap-1.5 flex-shrink-0">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <span className="text-[10px] sm:text-xs text-text-muted ml-1 sm:ml-2 font-mono truncate">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 sm:py-1 text-[10px] sm:text-xs text-text-muted hover:text-text-light transition-colors rounded hover:bg-surface-dark active:bg-surface-dark/80 flex-shrink-0 touch-manipulation min-h-[32px] sm:min-h-0"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
              <span className="hidden sm:inline">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
              <span className="hidden sm:inline">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="relative overflow-x-auto bg-[#1e1e1e] scrollbar-thin">
        <pre className="m-0 p-0 font-mono text-xs sm:text-sm leading-relaxed">
          <code className="block">
            {lines.map((line, index) => (
              <div
                key={index}
                className="flex hover:bg-[#2a2d2e] transition-colors px-2 sm:px-4 py-0.5 min-w-max"
              >
                {/* Line Numbers */}
                <span className="text-text-muted/40 text-[10px] sm:text-xs pr-2 sm:pr-4 select-none text-right min-w-[2rem] sm:min-w-[3rem] font-mono flex-shrink-0">
                  {index + 1}
                </span>
                {/* Code Line */}
                <span className="text-text-light whitespace-pre font-mono break-all sm:break-normal">
                  {line || " "}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
