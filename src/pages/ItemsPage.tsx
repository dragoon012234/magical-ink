import { Text } from "@rewind-ui/core";

import { Breadcrumb } from "../components";
import { ItemCard } from "../components/ItemCard";
import { PageLayout } from "../layouts/PageLayout";
import {
  AlchemizeProduct,
  CookingProduct,
  FarmProduct,
  Furniture,
  MaterialTool,
  MonsterItem,
  NatureItem,
  Ore,
  TreeFarmProduct,
  WorldMonsterItem,
} from "../types";

const content = [
  ["Nature", NatureItem.all()],
  ["Farm", FarmProduct.all()],
  ["Tree Farm", TreeFarmProduct.all()],
  ["Cooking", CookingProduct.all()],
  ["Alchemize", AlchemizeProduct.all()],
  ["Materials and Tools", MaterialTool.all()],
  ["Ore", Ore.all()],
  ["Furniture", Furniture.all()],
  ["World Monster Drop", WorldMonsterItem.all()],
  ["Monster Drop", MonsterItem.all()],
] as const;

export function ItemsPage() {
  console.log("Render", ItemsPage.name);

  return (
    <PageLayout title={<Breadcrumb items={[{ content: "Items" }]} />}>
      <div className='flex flex-col gap-4 justify-start items-stretch'>
        {content.map(([title, items]) => (
          <div key={title}>
            <Text variant='h3' className='border-y-2 border-opacity-60 border-blue-400 px-2'>
              {title}
            </Text>
            <div className='flex flex-row flex-wrap gap-2 py-2'>
              {items.map((v) => (
                <ItemCard key={v.filename} item={v} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
