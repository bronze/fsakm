import type {FC} from "react"
import type {MdxFile} from "nextra"
import {Link} from "nextra-theme-docs"
import {getPageMap} from "nextra/page-map"

export const Blog: FC<{lang: string}> = async ({lang}) => {
  const pageMap = (await getPageMap(`/${lang}/blog`)) as unknown as MdxFile[]

  const filteredPages = pageMap.filter(page => page.name !== "index")

  for (const page of filteredPages) {
    console.log(
      `[DEBUG] ${page.name} → ${page.frontMatter?.date} →`,
      new Date(page.frontMatter?.date ?? 0).toISOString()
    )
  }

  const sortedPages = filteredPages.sort((a, b) => {
    const dateA = new Date(a.frontMatter?.date ?? 0).getTime()
    const dateB = new Date(b.frontMatter?.date ?? 0).getTime()
    return dateB - dateA
  })

  return sortedPages.map(page => {
    const {title, description, date} = page.frontMatter!

    return (
      <div key={page.route} className="mt-12">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="my-6 leading-7 opacity-80">
          {description}{" "}
          <Link href={page.route} className="after:content-['_→']">
            Read more
          </Link>
        </p>
        <time
          dateTime={new Date(date).toISOString()}
          className="text-sm opacity-50">
          {new Date(date).toLocaleDateString(lang, {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </div>
    )
  })
}
