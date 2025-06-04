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

function createFooter(dictionary) {
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
            <h3 className="text-md pt-1 font-semibold">&nbsp;</h3>
            <a
              href="/federacao/instrutores/grao-mestre-kobi"
              className="text-muted-foreground text-sm">
              {dictionary.pages.graomestrekobi}
            </a>
            <a href="/blog" className="text-muted-foreground text-sm">
              {dictionary.pages.blog}
            </a>
            <a href="/contato" className="text-muted-foreground text-sm">
              {dictionary.pages.contato}
            </a>
          </div>
          <div data-slot="footer-column" className="flex flex-col gap-4">
            <h3 className="text-md pt-1 font-semibold">
              <a href="/krav-maga" className="">
                {dictionary.pages.kravmaga.index}
              </a>
            </h3>
            <a
              href="/krav-maga/criador"
              className="text-muted-foreground text-sm">
              {dictionary.pages.kravmaga.criador}
            </a>
            <a
              href="/krav-maga/historia"
              className="text-muted-foreground text-sm">
              {dictionary.pages.kravmaga.historia}
            </a>
            <a
              href="/krav-maga/linha-do-tempo"
              className="text-muted-foreground text-sm">
              {dictionary.pages.kravmaga.linhadotempo}
            </a>
            <a
              href="/krav-maga/faixas"
              className="text-muted-foreground text-sm">
              {dictionary.pages.kravmaga.faixas}
            </a>
            <a
              href="/krav-maga/tecnicas-especiais"
              className="text-muted-foreground text-sm">
              {dictionary.pages.kravmaga.tecnicasespeciais}
            </a>
            <a
              href="/krav-maga/israel"
              className="text-muted-foreground text-sm">
              {dictionary.pages.kravmaga.israel}
            </a>
            <a
              href="/krav-maga/militar"
              className="text-muted-foreground text-sm">
              {dictionary.pages.kravmaga.militar}
            </a>
            <a
              href="/krav-maga/galeria"
              className="text-muted-foreground text-sm">
              {dictionary.pages.kravmaga.galeria}
            </a>
            <a
              href="/krav-maga/midia"
              className="text-muted-foreground text-sm">
              {dictionary.pages.kravmaga.midia}
            </a>
          </div>
          <div data-slot="footer-column" className="flex flex-col gap-4">
            <h3 className="text-md pt-1 font-semibold">
              <a href="/federacao/">{dictionary.pages.federacao.index}</a>
            </h3>
            <a
              href="/federacao/instrutores"
              className="text-muted-foreground text-sm">
              {dictionary.pages.federacao.instrutores}
            </a>
            <a
              href="/federacao/formacao-de-instrutores"
              className="text-muted-foreground text-sm">
              {dictionary.pages.federacao.formacao}
            </a>
            <a
              href="/federacao/centro-de-treinamento"
              className="text-muted-foreground text-sm">
              {dictionary.pages.federacao.centrodetreinamento}
            </a>
            <a
              href="/federacao/seminarios-e-treinos-especiais"
              className="text-muted-foreground text-sm">
              {dictionary.pages.federacao.seminarios}
            </a>
            <a
              href="/federacao/palestras"
              className="text-muted-foreground text-sm">
              {dictionary.pages.federacao.palestras}
            </a>
            <a href="/federacao/blog" className="text-muted-foreground text-sm">
              {dictionary.pages.blog}
            </a>
          </div>
          <div data-slot="footer-column" className="flex flex-col gap-4">
            <h3 className="text-md pt-1 font-semibold">
              <a href="/academias/">{dictionary.pages.academias.index}</a>
            </h3>
            <a
              href="/academias/brasil"
              className="text-muted-foreground text-sm">
              {dictionary.pages.academias.brasil}
            </a>
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
            <a
              href="/academias/argentina"
              className="text-muted-foreground text-sm">
              {dictionary.pages.academias.argentina}
            </a>
            <a
              href="/academias/canada"
              className="text-muted-foreground text-sm">
              {dictionary.pages.academias.canada}
            </a>
            <a
              href="/academias/mexico"
              className="text-muted-foreground text-sm">
              {dictionary.pages.academias.mexico}
            </a>
            <a
              href="/academias/portugal"
              className="text-muted-foreground text-sm">
              {dictionary.pages.academias.portugal}
            </a>
            <a href="/academias/usa" className="text-muted-foreground text-sm">
              {dictionary.pages.academias.usa}
            </a>
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
                  <div className="mx-auto gap-8 flex items-center x:max-w-(--nextra-content-width) place-content-end p-4">
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
