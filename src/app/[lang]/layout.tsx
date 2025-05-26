import {Footer, Layout, Navbar, ThemeSwitch} from "nextra-theme-docs";
import {Banner, Head, Search} from "nextra/components";
import {getPageMap} from "nextra/page-map";
import {Instagram, Facebook, Youtube} from "lucide-react"; // Import icons from Lucide
import BodyWithPageClass from "@/src/components/bodypageclass";
import "../../styles/global.css";
import "nextra-theme-docs/style.css";
import Link from "next/link";
import {ThemeToggle} from "@/src/components/ThemeToggle";
import {LanguageToggle} from "@/src/components/LanguageToggle";
import {getDictionary, getDirection} from "../_dictionaries/get-dictionary";

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
        <b>FSAKM</b>
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

const footer = (
  <Footer>
    <div className="w-full grid sm:grid-cols-2 gap-4 ">
      <div className="flex place-content-center lg:place-content-start">MIT {new Date().getFullYear()} © Nextra.</div>
      <div className="flex place-content-center lg:place-content-end">
        <div className="grid grid-cols-3 gap-4">
          <a
            href="https://www.instagram.com/kravmaga_mestrekobi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 rounded group">
            <Instagram className="w-6 h-6 group-hover:text-fuchsia-500" />
          </a>
          <a
            href="https://www.facebook.com/kravmagamestrekobi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 rounded group">
            <Facebook className="w-6 h-6 group-hover:text-blue-500" />
          </a>
          <a
            href="https://www.youtube.com/@kravmagamestrekobi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 rounded group ">
            <Youtube className="w-6 h-6 group-hover:text-red-500" />
          </a>
        </div>
      </div>
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
        <link rel="shortcut icon" href="/images/general/icon.svg" />
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
          search={
            <Search
              emptyResult={dictionary.searchEmptyResult}
              errorText={dictionary.searchError}
              loading={dictionary.searchLoading}
              placeholder={dictionary.searchPlaceholder}
            />
          }
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
          {children}
        </Layout>
      </BodyWithPageClass>
    </html>
  );
}
