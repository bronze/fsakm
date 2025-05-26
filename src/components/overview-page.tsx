import {Cards} from "nextra/components";
import {getPageMap} from "nextra/page-map";
import type {FC} from "react";
import type {PageMapItem} from "nextra";

export const OverviewPage: FC<{
  folder: string;
  icons?: Record<string, FC>;
}> = async ({folder, icons}) => {
  const pageMap = await getPageMap(folder);
  const pages = pageMap.filter((item: PageMapItem) => item.kind === "MdxPage");

  return (
    <Cards>
      {pages.map((item: any) => {
        const icon = item.frontMatter?.icon;
        const Icon = icons?.[icon];
        return <Cards.Card key={item.name} title={item.title} href={item.route || item.href} icon={Icon && <Icon />} />;
      })}
    </Cards>
  );
};
