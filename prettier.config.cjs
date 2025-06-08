module.exports = {
	printWidth: 100,
	useTabs: true,
	tabWidth: 2,
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
	importOrderSeparation: false,
	importOrderSortSpecifiers: true,
	importOrderBuiltinModulesToTop: true,
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderMergeDuplicateImports: true,
	importOrderCombineTypeAndValueImports: true,
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-tailwindcss',
		'prettier-plugin-organize-attributes',
		'@ianvs/prettier-plugin-sort-imports',
	],
	overrides: [
		{
			files: ['.*', '*.md', '*.toml', '*.yml'],
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
