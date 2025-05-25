const withNextra=require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  readingTime: true,
  i18n: {
    locales: ['en', 'pt', 'es'],
    defaultLocale: 'pt'
  }
});

module.exports=withNextra();
