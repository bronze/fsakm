import {useMDXComponents as getMDXComponents} from "next-mdx-import-source-file";
import type {PageMapItem} from "nextra";
import {Cards} from "nextra/components";
import {getIndexPageMap, getPageMap} from "nextra/page-map";
import type {FC} from "react";

export const OverviewPage: FC<{
  filePath: string;
  lang: string; // Add lang parameter
  icons?: Record<string, FC>;
  pageMap?: PageMapItem[];
}> = async ({filePath, lang, icons, pageMap: $pageMap}) => {
  const {h2: H2} = getMDXComponents();
  const currentRoute = `/${lang}${filePath.replace("src", "").replace("/index.mdx", "")}`; // Include lang in the route
  const pageMap = $pageMap ?? (await getPageMap(currentRoute));

  return getIndexPageMap(pageMap).map((pageItem, index) => {
    if (!Array.isArray(pageItem)) {
      return <H2 key={index}>{pageItem.title}</H2>;
    }
    return (
      <Cards key={index}>
        {pageItem.map(item => {
          const icon = item.frontMatter?.icon;
          const Icon = icons?.[icon];
          if (icon && !Icon) {
            throw new Error(`Icon "${icon}" is defined in front matter but isn't provided`);
          }
          return (
            <Cards.Card key={item.name} title={item.title} href={item.route || item.href} icon={Icon && <Icon />} />
          );
        })}
      </Cards>
    );
  });
};
