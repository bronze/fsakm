import {Cards} from "nextra/components";
import {getPageMap} from "nextra/page-map";
import type {FC} from "react";
import type {PageMapItem} from "nextra";

type ListType = "folders" | "files";

export const OverviewPage: FC<{
  folder: string;
  icons?: Record<string, FC>;
  listType?: ListType; // "folders" or "files"
}> = async ({folder, icons, listType = "files"}) => {
  const pageMap = await getPageMap(folder);
  const items = pageMap.filter((item: PageMapItem) =>
    listType === "folders" ? item.kind === "Folder" : item.kind === "MdxPage",
  );

  return (
    <Cards>
      {items.map((item: any) => {
        const icon = item.frontMatter?.icon;
        const Icon = icons?.[icon];
        return (
          <Cards.Card
            key={item.name}
            title={item.title || item.name}
            href={item.route || item.href}
            icon={Icon && <Icon />}
          />
        );
      })}
    </Cards>
  );
};
