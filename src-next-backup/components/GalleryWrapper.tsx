import {getDictionary} from "@/src/app/_dictionaries/get-dictionary"
import type {Locale} from "@/src/app/_dictionaries/i18n-config"

import {Gallery} from "../../src/components/gallery"

export default async function GalleryWrapper({
  children,
  lang,
}: {
  children: React.ReactNode
  lang: Locale
}) {
  const dictionary = await getDictionary(lang)
  return (
    <Gallery dictionary={dictionary}>
      {Array.isArray(children) ? children : [children]}
    </Gallery>
  )
}
