import { Text } from "@rewind-ui/core";
import { useParams } from "react-router";

import { Breadcrumb, IngredientChip, ProduceTable, SectionTitle } from "../components";
import { PageLayout } from "../layouts/PageLayout";
import { findItem } from "../types";
import { EmptyPage } from "./EmptyPage";
import { CoinHandoverSvg, CoinSvg, IngredientSvg } from "../svgs";
import { isProduct, numberFormat } from "../utils";

export function ItemPage() {
  const params = useParams<"catorage" | "item">();
  const item = findItem(params.item, params.catorage);

  if (!item) {
    return <EmptyPage />;
  }

  const breadcrumb = <Breadcrumb items={[{ content: "Items", href: "/magical-ink/items" }, { content: item.name }]} />;

  const product = isProduct(item);
  const ingredients = product
    ? item.ingredient.map((v) => <IngredientChip key={v.ingredient.filename} {...v} />)
    : null;
  const rawIngredients = product
    ? item.calRawIngredients().map((v) => <IngredientChip key={v.ingredient.filename} {...v} />)
    : null;

  return (
    <PageLayout title={breadcrumb}>
      <div className='flex flex-col gap-4 justify-start items-stretch'>
        <SectionTitle title='Stat' />
        <div className='flex flex-row gap-4'>
          <div className='flex flex-col'>
            <div className='border rounded-md shadow-md outline outline-2 outline-white shadow-gray-800/50 hover:shadow-gray-800/60 bg-white object-contain'>
              <img src={item.img} alt={item.name} className='w-80' />
            </div>
          </div>

          <div className='flex-1 flex flex-col gap-1'>
            <div className='flex flex-row gap-1 justify-start items-center'>
              <CoinSvg size={24} />
              <Text as='p'>{`Item price: ${numberFormat(item.price)}`}</Text>
            </div>

            <div className='flex flex-row gap-1 justify-start items-center'>
              <CoinHandoverSvg size={24} />
              <Text as='p'>{`Wish price: ${numberFormat(item.wishPrice)}`}</Text>
            </div>

            {product && (
              <>
                <div className='flex flex-row gap-1 justify-start items-center'>
                  <IngredientSvg size={24} />
                  <Text as='p'>Ingredients:</Text>
                  {ingredients}
                </div>

                <div className='flex flex-row gap-1 justify-start items-center'>
                  <IngredientSvg size={24} />
                  <Text as='p'>Raw Ingredients:</Text>
                  {rawIngredients}
                </div>
              </>
            )}
          </div>
        </div>

        <SectionTitle title='Production chain' />
        <div className='h-fit overflow-x-auto'>
          <ProduceTable referenceResource={item} />
        </div>
      </div>
    </PageLayout>
  );
}
