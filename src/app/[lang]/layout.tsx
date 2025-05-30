import 'fumadocs-ui/style.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

// available languages that will be displayed on UI
// make sure `locale` is consistent with your i18n config
const locales=[
  {
    name: 'Português',
    locale: 'pt',
  },
  {
    name: 'English',
    locale: 'en',
  },
  {
    name: 'Español',
    locale: 'es',
  },
];
export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <RootProvider
          i18n={{
            locale: lang,
            locales,
            translations: {
              pt: {
                toc: 'Índice',
                search: 'Busca',
                lastUpdate: 'atualizado',
                searchNoResult: 'Sem resultados',
                previousPage: 'Página anterior',
                nextPage: 'Próxima página',
                chooseLanguage: 'Escolha uma língua',
              },
              es: {
                toc: '目錄',
                search: '搜尋文檔',
                lastUpdate: '最後更新於',
                searchNoResult: '沒有結果',
                previousPage: '上一頁',
                nextPage: '下一頁',
                chooseLanguage: '選擇語言',
              },
            }[lang],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}