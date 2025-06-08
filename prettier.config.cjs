module.exports = {
    printWidth: 100,
    useTabs: false,
    tabWidth: 4,
    trailingComma: 'all',
    semi: true, // <- ponto e vírgula no final
    singleQuote: true,
    bracketSpacing: false,
    bracketSameLine: true, // evita quebra antes do > em JSX
    arrowParens: 'avoid',
    // printWidth: 120, // aumente conforme seu gosto
    endOfLine: 'lf',
    trailingComma: 'es5',
    importOrder: [
        '^(react/(.*)$)|^(react$)',
        '^(next/(.*)$)|^(next$)',
        '<THIRD_PARTY_MODULES>',
        '',
        '^@workspace/(.*)$',
        '',
        '^types$',
        '^@/types/(.*)$',
        '^@/config/(.*)$',
        '^@/lib/(.*)$',
        '^@/hooks/(.*)$',
        '^@/components/ui/(.*)$',
        '^@/components/(.*)$',
        '^@/registry/(.*)$',
        '^@/styles/(.*)$',
        '^@/app/(.*)$',
        '^@/www/(.*)$',
        '',
        '^[./]',
    ],
    plugins: [
        'prettier-plugin-astro',
        'prettier-plugin-tailwindcss',
        'prettier-plugin-organize-attributes',
        '@ianvs/prettier-plugin-sort-imports',
    ],
    overrides: [
        {
            files: ['.*', '*.json', '*.md', '*.mdx', '*.toml', '*.yml'],
            options: {
                useTabs: false,
            },
        },
        {
            files: ['**/*.astro'],
            options: {
                parser: 'astro',
            },
        },
    ],
};
