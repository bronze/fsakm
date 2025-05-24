import React from "react";
import {DocsThemeConfig, ThemeSwitch, useConfig} from "nextra-theme-docs";
import {useRouter} from "next/router";
import {resolveUrl} from "./lib/utils";

const config: DocsThemeConfig = {
  logo: <span>Nextra Shadcn Tailwind</span>,
  logoLink: "/",
  chat: {},
  footer: {
    text: "FSAKM Test",
  },
  project: {
    link: "https://github.com/bronze/fsakm",
  },
  // banner: {
  //   text: "This is a template based on nextra + tailwind + shadcn-ui",
  // },
  docsRepositoryBase: "https://github.com/ObservedObserver/nextra-docs-tailwind-shadcn-template",
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
        titleTemplate: "%s – My Site",
      };
    }
  },
  navbar: {
    extraContent: () => {
      return <ThemeSwitch />;
    },
  },
};

export default config;
