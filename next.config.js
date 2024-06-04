const ts = require('typescript')
const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx'],
    output: "export",
};
module.exports =  withMDX(nextConfig);
