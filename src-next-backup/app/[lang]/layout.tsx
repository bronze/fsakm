import BodyWithPageClass from "@/src/components/bodypageclass"
import {Analytics} from "@vercel/analytics/next"
import {Facebook, Instagram, Youtube} from "lucide-react" // Import icons from Lucide
import {Footer, Layout, Navbar, ThemeSwitch} from "nextra-theme-docs"
import {Banner, Head, Search} from "nextra/components"
import {getPageMap} from "nextra/page-map"

import AmplitudeContextProvider from "./amplitudecontext"
import {PostHogProvider} from "./providers"

import "../../styles/global.css"
import "nextra-theme-docs/style.css"

import Image from "next/image"
import Link from "next/link"
import {LanguageToggle} from "@/src/components/LanguageToggle"
import {ThemeToggle} from "@/src/components/ThemeToggle"
import {Toaster} from "@/src/components/ui/sonner"

import {getDictionary, getDirection} from "../_dictionaries/get-dictionary"

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const banner = (
  <Banner storageKey="some-key">
    <Link href="https://github.com/"></Link>
  </Banner>
)
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
    }>
    <>
      <LanguageToggle />
      <ThemeToggle />
      {/* <ThemeSwitch /> */}
      {/* Add your second component here */}
    </>
  </Navbar>
)

const SocialLinks = (
  <div className="grid grid-cols-3 gap-4">
    <a
      href="https://www.instagram.com/kravmaga_mestrekobi/"
      title="Instagram"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 dark:hover:bg-gray-700 rounded group transition">
      <Instagram className="w-6 h-6 group-hover:text-fuchsia-500" />
    </a>
    <a
      href="https://www.facebook.com/kravmagamestrekobi/"
      title="Facebook"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 dark:hover:bg-gray-700 rounded group transition">
      <Facebook className="w-6 h-6 group-hover:text-blue-500" />
    </a>
    <a
      href="https://www.youtube.com/@kravmagamestrekobi/"
      title="Youtube"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 dark:hover:bg-gray-700 rounded group transition ">
      <Youtube className="w-6 h-6 group-hover:text-red-500" />
    </a>
  </div>
)
const FooterLink = ({href, children}) => (
  <a
    href={href}
    className="text-muted-foreground text-sm x:focus-visible:nextra-focus x:text-sm x:contrast-more:text-gray-700 x:contrast-more:dark:text-gray-100 x:whitespace-nowrap x:hover:text-gray-800 x:dark:hover:text-gray-200 x:ring-inset x:transition-colors x:aria-[current]:font-medium x:aria-[current]:subpixel-antialiased x:aria-[current]:text-current">
    {children}
  </a>
)

function createFooter(dictionary) {
  const kravmagaLinks = [
    {
      href: "/krav-maga/criador",
      label: dictionary.pages.kravmaga.criador,
    },
    {
      href: "/krav-maga/historia",
      label: dictionary.pages.kravmaga.historia,
    },
    {
      href: "/krav-maga/linha-do-tempo",
      label: dictionary.pages.kravmaga.linhadotempo,
    },
    {href: "/krav-maga/faixas", label: dictionary.pages.kravmaga.faixas},
    {
      href: "/krav-maga/tecnicas-especiais",
      label: dictionary.pages.kravmaga.tecnicasespeciais,
    },
    {href: "/krav-maga/israel", label: dictionary.pages.kravmaga.israel},
    {href: "/krav-maga/militar", label: dictionary.pages.kravmaga.militar},
    {href: "/krav-maga/galeria", label: dictionary.pages.kravmaga.galeria},
    {href: "/krav-maga/midia", label: dictionary.pages.kravmaga.midia},
  ]
  const federacaoLinks = [
    {
      href: "/federacao/instrutores",
      label: dictionary.pages.federacao.instrutores,
    },
    {
      href: "/federacao/formacao-de-instrutores",
      label: dictionary.pages.federacao.formacao,
    },
    {
      href: "/federacao/centro-de-treinamento",
      label: dictionary.pages.federacao.centrodetreinamento,
    },
    {
      href: "/federacao/seminarios-e-treinos-especiais",
      label: dictionary.pages.federacao.seminarios,
    },
    {href: "/federacao/palestras", label: dictionary.pages.federacao.palestras},
    {href: "/blog", label: dictionary.pages.blog},
  ]
  const academiaLinks = [
    {
      href: "/academias/brasil",
      label: dictionary.pages.academias.brasil,
    },
    {
      href: "/academias/argentina",
      label: dictionary.pages.academias.argentina,
    },
    {
      href: "/academias/canada",
      label: dictionary.pages.academias.canada,
    },
    {
      href: "/academias/mexico",
      label: dictionary.pages.academias.mexico,
    },
    {
      href: "/academias/portugal",
      label: dictionary.pages.academias.portugal,
    },
    {
      href: "/academias/usa",
      label: dictionary.pages.academias.usa,
    },
  ]

  return (
    <Footer>
      <div data-slot="footer" className="text-foreground w-full">
        <div
          data-slot="footer-content"
          className="grid grid-cols-2 gap-8 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3">
          <div
            data-slot="footer-column"
            className="flex col-span-2 flex-row items-center justify-between gap-8 border-b pb-8 md:col-span-1 md:flex-col md:items-start md:justify-start md:border-b-0">
            <div className="flex items-center gap-2">
              {/* Logo para modo claro */}
              <Image
                src="/pt/images/logo-km-preto.png"
                alt="Logo Krav Maga"
                width={160}
                height={30}
                className="block dark:hidden"
              />

              {/* Logo para modo escuro */}
              <Image
                src="/pt/images/logo-km.png"
                alt="Logo Krav Maga"
                width={160}
                height={30}
                className="hidden dark:block"
              />
            </div>
            {SocialLinks}
          </div>
          <div data-slot="footer-column" className="flex flex-col gap-4">
            <span className="text-md pt-1 font-semibold">&nbsp;</span>
            <FooterLink href="/federacao/instrutores/grao-mestre-kobi">
              {dictionary.pages.graomestrekobi}
            </FooterLink>
            <FooterLink href="/blog">{dictionary.pages.blog}</FooterLink>
            <FooterLink href="/contato">{dictionary.pages.contato}</FooterLink>
          </div>
          <div data-slot="footer-column" className="flex flex-col gap-4">
            <h3 className="text-md pt-1 font-semibold">
              <a
                href="/krav-maga"
                className="hover:text-gray-500 dark:hover:text-gray-400">
                {dictionary.pages.kravmaga.index}
              </a>
            </h3>
            {kravmagaLinks.map(link => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </div>
          <div data-slot="footer-column" className="flex flex-col gap-4">
            <h3 className="text-md pt-1 font-semibold">
              <a
                href="/federacao/"
                className="hover:text-gray-500 dark:hover:text-gray-400">
                {dictionary.pages.federacao.index}
              </a>
            </h3>
            {federacaoLinks.map(link => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </div>
          <div data-slot="footer-column" className="flex flex-col gap-4">
            <h3 className="text-md pt-1 font-semibold">
              <a
                href="/academias/"
                className="hover:text-gray-500 dark:hover:text-gray-400">
                {dictionary.pages.academias.index}
              </a>
            </h3>
            {academiaLinks.map(link => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
            {/* <span className="text-muted-foreground text-xs">
              <div className="mx-auto ">
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-start">
                    <span className="bg-gray-100 dark:bg-neutral-900 pr-1">
                      {dictionary.pages.academias.outrospaises}
                    </span>
                  </div>
                </div>
              </div>
            </span> */}
          </div>
        </div>
        <div
          data-slot="footer-bottom"
          className="border-border dark:border-border/15 text-muted-foreground mt-8 flex flex-col items-center justify-between gap-4 pt-4 text-xs sm:flex-row border-0">
          <div>
            <p>
              {new Date().getFullYear()} © Federação Sul Americana de Krav
              Maga.
            </p>
            <p>
              Rua Sorocaba, 258, Botafogo - Rio de Janeiro, RJ, Brasil,
              22271-110
            </p>
          </div>
        </div>
      </div>
    </Footer>
  )
}

// Removed searchProps because the search prop expects a ReactNode, not an object

export default async function RootLayout({children, params}) {
  const {lang} = await params
  const dictionary = await getDictionary(lang)
  let pageMap = await getPageMap(`/${lang}`)

  return (
    <html lang={lang} dir={getDirection(lang)} suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/pt/cropped-favicon-mestre-kobi-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/pt/cropped-favicon-mestre-kobi-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="/pt/cropped-favicon-mestre-kobi-180x180.png"
        />
      </Head>
      <BodyWithPageClass>
        <PostHogProvider>
          <AmplitudeContextProvider>
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
              footer={createFooter(dictionary)}
              // ... Your additional layout options
            >
              <main className="w-full h-full flex flex-col">
                <header className="w-full  ">
                  <div className="mx-auto gap-8 flex items-center x:max-w-(--nextra-content-width) place-content-end pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)] py-2">
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
            <Analytics />
          </AmplitudeContextProvider>
        </PostHogProvider>
      </BodyWithPageClass>
    </html>
  )
}
