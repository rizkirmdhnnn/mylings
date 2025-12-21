import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  images: {
    domains: ["scontent-cgk2-1.xx.fbcdn.net","media2.dev.to"],
  },
  output: "standalone",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
    extension: /\.mdx?$/, // Regular expression to match `.md` and `.mdx` files
});

export default withMDX(nextConfig);
