import {getDictionary} from "@/src/app/_dictionaries/get-dictionary"

import {Gallery} from "./gallery"

export default async function GalleryWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const dictionary = await getDictionary("pt") // idioma fixado
  return <Gallery dictionary={dictionary}>{children}</Gallery>
}
