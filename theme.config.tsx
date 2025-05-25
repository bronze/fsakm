import React from "react";
import {DocsThemeConfig, ThemeSwitch, useConfig} from "nextra-theme-docs";
import {useRouter} from "next/router";
import {resolveUrl} from "./lib/utils";

const config: DocsThemeConfig = {
  logo: <span>FSAKM NextJS</span>,
  logoLink: "/",
  chat: {},
  sidebar: {
    toggleButton: true,
  },
  i18n: [
    {locale: "pt", text: "Português"},
    {locale: "en", text: "English"},
    {locale: "es", text: "Español"},
  ],
  footer: {
    text: "FSAKM Test",
  },
  toc: {
    backToTop: null,
  },
  project: {
    link: "https://github.com/bronze/fsakm",
  },
  search: {
    placeholder: "Busque no site...",
  },
  feedback: {
    content: "",
    useLink: null,
  },
  editLink: {
    text: null,
    component: null,
  },
  head: () => {
    const {asPath, defaultLocale, locale, basePath} = useRouter();
    const {frontMatter} = useConfig();

    // Replace with your website's base URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

    const url = resolveUrl(baseUrl, basePath, defaultLocale === locale ? undefined : locale, asPath);
    const ogImage = frontMatter.ogImage;

    const title = frontMatter.title || "Your Default Title";
    const description = frontMatter.description || "Your Default Description";

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={url} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {ogImage && <meta property="og:image" content={ogImage} />}
      </>
    );
  },
  useNextSeoProps() {
    const {asPath} = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – FSAKM",
      };
    }
  },
  navbar: {
    extraContent: () => (
      <>
        <ThemeSwitch />
        {/* Add your second component here */}
      </>
    ),
  },
};

export default config;
