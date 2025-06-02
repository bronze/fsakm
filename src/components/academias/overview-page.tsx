import type {FC} from "react"
import {useMDXComponents as getMDXComponents} from "next-mdx-import-source-file"
import type {PageMapItem} from "nextra"
import {Cards} from "nextra/components"
import {getIndexPageMap, getPageMap} from "nextra/page-map"

export const OverviewPage: FC<{
  filePath: string
  lang: string // Add lang parameter
  icons?: Record<string, FC>
  pageMap?: PageMapItem[]
}> = async ({filePath, lang, icons, pageMap: $pageMap}) => {
  const currentRoute = `/${lang}${filePath.replace("src", "").replace("/index.mdx", "")}` // Include lang in the route
  const pageMap = $pageMap ?? (await getPageMap(currentRoute))

  return getIndexPageMap(pageMap).map((pageItem, index) => {
    if (Array.isArray(pageItem)) {
      return (
        <Cards key={index}>
          {pageItem.map(item => {
            const icon = item.frontMatter?.icon
            const Icon = icons?.[icon]
            if (icon && !Icon) {
              throw new Error(
                `Icon "${icon}" is defined in front matter but isn't provided`
              )
            }
            return (
              <Cards.Card
                key={item.name}
                title={item.frontMatter?.title}
                href={item.route}
                icon={Icon && <Icon />}
              />
            )
          })}
        </Cards>
      )
    } else if (pageItem.type === "separator") {
      return (
        <div key={index} style={{margin: "1em 0", fontWeight: "bold"}}>
          {pageItem.title}
        </div>
      )
    }
    return null
  })
}
