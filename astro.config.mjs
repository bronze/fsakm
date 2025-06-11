// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import {imageService} from '@unpic/astro/service';
import icon from 'astro-icon';
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://fsakm-astro.cerlosbronze.com.br',
    // base: '/docs',
    base: process.env.NODE_ENV === 'production' ? '/' : '/',
    image: {
        service: imageService({
            // This can usually be auto-detected
            // fallbackService: 'vercel', // astro or vercel?
            placeholder: 'blurhash',
            // This is the default
            layout: 'constrained',
        }),
    },
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [react(), icon(), mdx()],
    adapter: vercel({
        imageService: true,
    }),
});
