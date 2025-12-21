import type { MDXComponents } from "mdx/types";
import React, { type ReactNode } from "react";
import CodeBlock from "./components/blog/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }: { children?: ReactNode }) => (
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 mt-12 text-text-light leading-tight first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="text-xl sm:text-2xl font-bold mb-4 mt-10 text-text-light leading-tight first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="text-lg sm:text-xl font-bold mb-3 mt-8 text-text-light leading-tight first:mt-0">
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: ReactNode }) => (
      <h4 className="text-base sm:text-lg font-bold mb-3 mt-6 text-text-light leading-tight first:mt-0">
        {children}
      </h4>
    ),
    p: ({ children }: { children?: ReactNode }) => (
      <p className="text-text-muted text-base leading-[1.7] mb-6">{children}</p>
    ),
    code: ({
      children,
      className,
    }: {
      children?: ReactNode;
      className?: string;
    }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code className="text-code-variable bg-surface-dark/50 px-1 py-0.5 rounded text-sm font-mono">
            {children}
          </code>
        );
      }
      // For code blocks, store className and pass to pre
      return (
        <code className={className} data-language={className}>
          {children}
        </code>
      );
    },
    pre: ({ children }: { children?: ReactNode }) => {
      // Check if this is a code block (has code element with className)
      if (children && typeof children === "object" && "props" in children) {
        const codeElement = children as React.ReactElement<{
          className?: string;
          children?: ReactNode;
        }>;
        if (
          codeElement.props?.className &&
          typeof codeElement.props.className === "string" &&
          codeElement.props.className.startsWith("language-")
        ) {
          return (
            <CodeBlock className={codeElement.props.className}>
              {codeElement.props.children}
            </CodeBlock>
          );
        }
      }
      // Regular pre element
      return (
        <pre className="bg-surface-dark rounded-lg p-4 overflow-x-auto mb-4 border border-border-dark font-mono text-sm">
          {children}
        </pre>
      );
    },
    a: ({ href, children }: { href?: string; children?: ReactNode }) => (
      <a
        href={href}
        className="text-primary hover:text-primary/80 underline"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    ul: ({ children }: { children?: ReactNode }) => (
      <ul className="list-disc list-outside mb-6 text-text-muted space-y-3 ml-6 sm:ml-8">
        {children}
      </ul>
    ),
    ol: ({ children }: { children?: ReactNode }) => (
      <ol className="list-decimal list-outside mb-6 text-text-muted space-y-3 ml-6 sm:ml-8">
        {children}
      </ol>
    ),
    li: ({ children }: { children?: ReactNode }) => (
      <li className="text-text-muted text-base leading-[1.7] pl-2">
        {children}
      </li>
    ),
    blockquote: ({ children }: { children?: ReactNode }) => (
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-text-muted text-base bg-surface-dark/30 rounded-r-lg">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-12 border-border-dark" />,
    table: ({ children }: { children?: ReactNode }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border-collapse border border-border-dark">
          {children}
        </table>
      </div>
    ),
    th: ({ children }: { children?: ReactNode }) => (
      <th className="border border-border-dark px-4 py-2 bg-surface-dark text-text-light font-semibold text-left">
        {children}
      </th>
    ),
    td: ({ children }: { children?: ReactNode }) => (
      <td className="border border-border-dark px-4 py-2 text-text-muted">
        {children}
      </td>
    ),
    img: ({ src, alt }: { src?: string; alt?: string }) => (
      <img
        src={src}
        alt={alt}
        className="max-w-full h-auto rounded-lg mb-4 border border-border-dark"
      />
    ),
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-bold text-text-light">{children}</strong>
    ),
    em: ({ children }: { children?: ReactNode }) => (
      <em className="italic text-text-muted">{children}</em>
    ),
    ...components,
  };
}
