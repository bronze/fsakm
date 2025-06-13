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
    experimental: {
        responsiveImages: true,
    },

    image: {
        // Used for all Markdown images; not configurable per-image
        // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
        experimentalLayout: 'constrained',
        service: imageService({
            // This can usually be auto-detected
            fallbackService: 'astro',
            placeholder: 'blurhash',
            // This is the default
            layout: 'constrained',
        }),
    },

    // site: 'https://fsakm-astro.carlosbronze.com.br',
    // base: '/docs',
    // base: process.env.NODE_ENV === 'production' ? '/' : '/',
    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [react(), icon(), mdx()],
    output: 'static',
    adapter: vercel({
        imageService: false, // ⚠️ ESSENCIAL: desativa o otimizador da Vercel
    }),
});
