import nextra from "nextra";

const withNextra=nextra({
  search: true,
  defaultShowCopyCode: true
});

export default withNextra({
  // ... Other Next.js config options
  // output: 'export'
  i18n: {
    locales: ['pt', 'en', 'es'],
    defaultLocale: 'pt',
    localeDetection: false, // <- disables auto-detection based on browser
    debug: process.env.NODE_ENV==='development',
    nonExplicitSupportedLngs: true,
    reloadOnPrerender: process.env.NODE_ENV==='development',
    trailingSlash: true,
  },
});
