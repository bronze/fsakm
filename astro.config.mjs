// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // site: 'https://fsakm-astro.carlosbronze.com.br',
    // base: '/docs',
    // base: process.env.NODE_ENV === 'production' ? '/' : '/',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [react(), icon(), mdx()],
});
