import {Footer, Layout, Navbar, ThemeSwitch} from "nextra-theme-docs";
import {Banner, Head, Search} from "nextra/components";
import {getPageMap} from "nextra/page-map";
import {Instagram, Facebook, Youtube} from "lucide-react"; // Import icons from Lucide
import BodyWithPageClass from "@/src/components/bodypageclass";
import "../../styles/global.css";
import "nextra-theme-docs/style.css";
import Image from "next/image";
import Link from "next/link";
import {ThemeToggle} from "@/src/components/ThemeToggle";
import {LanguageToggle} from "@/src/components/LanguageToggle";
import {getDictionary, getDirection} from "../_dictionaries/get-dictionary";
import {Toaster} from "@/src/components/ui/sonner";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = (
  <Banner storageKey="some-key">
    <Link href="https://github.com/"></Link>
  </Banner>
);
//<img src="/images/general/logo.svg" alt="Logo" width={100} height={20} />
const navbar = (
  <Navbar
    logo={
      <div>
        <div>
          {/* Logo para modo claro */}
          <Image
            src="/pt/images/logo-km-preto.png"
            alt="Logo Krav Maga"
            width={100}
            height={30}
            className="block dark:hidden"
          />

          {/* Logo para modo escuro */}
          <Image
            src="/pt/images/logo-km.png"
            alt="Logo Krav Maga"
            width={100}
            height={30}
            className="hidden dark:block"
          />
        </div>
      </div>
    }
    children={
      <>
        <LanguageToggle />
        <ThemeToggle />
        {/* <ThemeSwitch /> */}
        {/* Add your second component here */}
      </>
    }
  />
);

const SocialLinks = (
  <div className="grid grid-cols-3 gap-4">
    <a
      href="https://www.instagram.com/kravmaga_mestrekobi/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 dark:hover:bg-gray-700 rounded group transition">
      <Instagram className="w-6 h-6 group-hover:text-fuchsia-500" />
    </a>
    <a
      href="https://www.facebook.com/kravmagamestrekobi/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 dark:hover:bg-gray-700 rounded group transition">
      <Facebook className="w-6 h-6 group-hover:text-blue-500" />
    </a>
    <a
      href="https://www.youtube.com/@kravmagamestrekobi/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 dark:hover:bg-gray-700 rounded group transition ">
      <Youtube className="w-6 h-6 group-hover:text-red-500" />
    </a>
  </div>
);

const footer = (
  <Footer>
    <div className="w-full grid md:grid-cols-2 gap-4 ">
      <div className="flex flex-col items-center md:items-start gap-4">
        <Image src="/pt/images/logo-km.png" alt="Logo Krav Maga" className="" width={160} height={20} />
        {new Date().getFullYear()} © Federação Sul Americana de Krav Maga.
      </div>

      <div className="flex place-content-center lg:place-content-end">{SocialLinks}</div>
    </div>
  </Footer>
);

// Removed searchProps because the search prop expects a ReactNode, not an object

export default async function RootLayout({children, params}) {
  const {lang} = await params;
  const dictionary = await getDictionary(lang);
  let pageMap = await getPageMap(`/${lang}`);

  return (
    <html lang={lang} dir={getDirection(lang)} suppressHydrationWarning>
      <Head>
        <link rel="shortcut icon" href="/pt/cropped-favicon-mestre-kobi-32x32.png" sizes="32x32" />
        <link rel="icon" href="/pt/cropped-favicon-mestre-kobi-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/pt/cropped-favicon-mestre-kobi-180x180.png" />
      </Head>
      <BodyWithPageClass>
        <Layout
          i18n={[
            {locale: "en", name: "English"},
            {locale: "es", name: "Español"},
            {locale: "pt", name: "Português"},
          ]}
          // banner={banner}
          navbar={navbar}
          // Example: To customize the search input placeholder
          search={null}
          editLink={null}
          feedback={{
            content: null,
          }}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true,
          }}
          pageMap={await getPageMap(`/${lang}`)}
          // docsRepositoryBase="https://github.com/phucbm/nextra-docs-starter/tree/main"
          toc={{
            backToTop: dictionary.backToTop,
            title: dictionary.tocTitle,
          }}
          footer={footer}
          // ... Your additional layout options
        >
          <main className="w-full h-full flex flex-col">
            <header className="w-full  ">
              <div className="mx-auto gap-8 flex items-center container x:max-w-(--nextra-content-width) place-content-end p-4">
                <div className="group transition-all duration-300 ease-in-out w-64 focus-within:w-96">
                  <Search
                    emptyResult={dictionary.searchEmptyResult}
                    errorText={dictionary.searchError}
                    loading={dictionary.searchLoading}
                    placeholder={dictionary.searchPlaceholder}
                    className="searchinput" // Garante que o Search preencha o container
                  />
                </div>

                <div>{SocialLinks}</div>
              </div>
            </header>
            <div>{children}</div>
          </main>
        </Layout>
        <Toaster />
      </BodyWithPageClass>
    </html>
  );
}
