// @ts-check
import mdxConf from '@next/mdx';
import remarkGfm from 'remark-gfm';
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

const withMDX = mdxConf({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react"
  },
  
});

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};
export default withMDX(config);
