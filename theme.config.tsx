import {DocsThemeConfig, Navbar, ThemeSwitch, useConfig} from "nextra-theme-docs";
import {ComponentProps} from "react";

import {useRouter} from "next/router";
import {resolveUrl} from "./lib/utils";

import config from "./config";

export const TITLE_TEMPLATE_SUFFIX = " – " + config.title;

export default {
  logo: <span>FSAKM NextJS</span>,
  logoLink: "/",
  chat: {},
  sidebar: {
    toggleButton: true,
  },
  i18n: [
    {locale: "pt", name: "Português"},
    {locale: "en", name: "English"},
    {locale: "es", name: "Español"},
  ],
  footer: {
    content: "FSAKM Test",
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
    useLink: undefined,
  },
  editLink: {
    content: null,
    component: null,
  },
  navbar: {
    extraContent: () => (
      <>
        <ThemeSwitch />
        {/* Add your second component here */}
      </>
    ),
  },
  head: function Head() {
    const pageConfig = useConfig();
    const {route} = useRouter();
    const isDefault = route === "/" || !pageConfig.title;

    const ogPayload = {
      title: isDefault ? config.description : pageConfig.title,
      subtitle: pageConfig.frontMatter.subtitle,
    };
    const ogImageUrl = new URL("/api/og-image", config.baseUrl);
    ogImageUrl.search = new URLSearchParams({
      params: JSON.stringify(ogPayload),
    }).toString();

    const description = pageConfig.frontMatter.description || config.description;
    const title = pageConfig.title + TITLE_TEMPLATE_SUFFIX;

    return (
      <>
        <title>{title}</title>
        <meta content={title} name="og:title" />
        <meta content={title} name="twitter:title" />

        <meta content={description} name="description" />
        <meta content={description} name="og:description" />
        <meta content={description} name="twitter:description" />

        <meta content={ogImageUrl.toString()} name="og:image" />

        <link href="/favicon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/favicon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/favicon/site.webmanifest" rel="manifest" />
        <link color="#5bbad5" href="/favicon/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#da532c" name="msapplication-TileColor" />
        <meta content="#ffffff" name="theme-color" />

        <meta content="jamannnnnn" name="twitter:site" />
        <meta content="summary_large_image" name="twitter:card" />
      </>
    );
  },
} satisfies DocsThemeConfig;
