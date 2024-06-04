import '@/styles/mdx.css'

import type { MDXComponents } from 'mdx/types'
import { Children } from 'react'
    // This file is required to use MDX in `app` directory.
    export function useMDXComponents(components: MDXComponents): MDXComponents {
      return {
        // Allows customizing built-in components, e.g. to add styling.
        h1: ({ children }) => <p className='title'>{children}</p>,
        h2: ({ children }) => <p className='section'>{children}</p>,
        ...components,
      }
    }