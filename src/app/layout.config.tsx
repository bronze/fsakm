import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';

const translations = {
  en: {
    title: 'English Docs',
    docs: 'Documentation',
  },
  pt: {
    title: 'FSAKM',
    docs: 'Documentação',
  },
  es: {
    title: 'FSAKM',
    docs: 'Documentación',
  },
};

export function baseOptions(locale: string): BaseLayoutProps {
  const t = translations[locale as keyof typeof translations] || translations.en;

  return {
    i18n,
    nav: {
      title: t.title,
      url: `/${locale}`,
    },
    githubUrl: 'https://github.com',
    links: [
      {
        type: 'main',
        text: t.docs,
        url: `/${locale}/docs`,
      },
    ],
  };
}
