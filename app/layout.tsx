import {Footer, Layout, Navbar} from "nextra-theme-docs";
import {Banner, Head, Search} from "nextra/components";
import {getPageMap} from "nextra/page-map";
import {Instagram, Facebook, Youtube} from "lucide-react"; // Import icons from Lucide
import "../styles/global.css";
import "nextra-theme-docs/style.css";
import Link from "next/link";
import {SearchParamsContext} from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = (
  <Banner storageKey="some-key">
    This template was created with 🩸 and 💦 by <Link href="https://github.com/phucbm">PHUCBM</Link> 🐧
  </Banner>
);
//<img src="/images/general/logo.svg" alt="Logo" width={100} height={20} />
const navbar = (
  <Navbar
    logo={
      <div>
        <b>FSAKM</b> <span style={{opacity: "60%"}}>Federação Sul Americana de Krav-Maga</span>
      </div>
    }
  />
);

const searchConfig = <Search placeholder="Busque no site..." />;

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
            className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 rounded-full group">
            <Instagram className="w-6 h-6 group-hover:text-fuchsia-500" />
          </a>
          <a
            href="https://www.facebook.com/kravmagamestrekobi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 rounded-full group">
            <Facebook className="w-6 h-6 group-hover:text-blue-500" />
          </a>
          <a
            href="https://www.youtube.com/@kravmagamestrekobi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 rounded-full group ">
            <Youtube className="w-6 h-6 group-hover:text-red-500" />
          </a>
        </div>
      </div>
    </div>
  </Footer>
);

// Removed searchProps because the search prop expects a ReactNode, not an object

export default async function RootLayout({children}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning>
      <Head
      // ... Your additional head options
      >
        <link rel="shortcut icon" href="/images/general/icon.svg" />
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          // Example: To customize the search input placeholder
          search={searchConfig}
          editLink={null}
          feedback={{
            content: null,
          }}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: true,
          }}
          pageMap={await getPageMap()}
          // docsRepositoryBase="https://github.com/phucbm/nextra-docs-starter/tree/main"
          toc={{
            backToTop: "Rolagem para cima...",
          }}
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
