import { Popover, Ribbon, Table, Text } from "@rewind-ui/core";

import type { Product } from "../types";
import { ResourceAvatar } from "./ResourceAvatar";
import { durationFormat, numberFormat } from "../utils";
import { IngredientChip } from "./IngredientChip";
import { ProductSvg } from "../svgs";

type Props = {
  product: Product;
};

export function ProductItem(props: Props) {
  const { product } = props;
  const { price, wishPrice, ingredient } = product;

  const wishRevenue = wishPrice - price;
  const netWorth = ingredient.reduce((acc, { ingredient, count }) => acc + ingredient.price * count, 0);

  return (
    <Popover trigger='click' placement='bottom-start' shadow='md' radius='base'>
      <Popover.Trigger>
        <button className='relative'>
          <ResourceAvatar resource={product} />
          {product.isLastChainProduct && (
            <Ribbon className='z-50 -translate-x-1' color='blue' radius='lg' shadowColor='blue' size='sm' tone='glossy'>
              <ProductSvg size={16} className='text-white' />
            </Ribbon>
          )}
        </button>
      </Popover.Trigger>
      <Popover.Content>
        <div className='flex flex-row justify-stretch content-stretch gap-2'>
          <div className='w-[200px] flex flex-col justify-start content-start gap-2'>
            <Text variant='h5'>Produce</Text>
            {!!ingredient.length && (
              <div className='flex flex-row flex-wrap gap-1 justify-start content-start'>
                {ingredient.map(IngredientChip)}
              </div>
            )}
            <Table horizontalBorders={false} radius='base' size='sm' striped={false}>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td align='left'>Duration</Table.Td>
                  <Table.Td align='center'>{durationFormat(product.duration)}</Table.Td>
                  <Table.Td align='center'>{durationFormat(product.durationx5)}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td align='left'>Cost</Table.Td>
                  <Table.Td align='center'>{numberFormat(product.cost)}</Table.Td>
                  <Table.Td align='center'>{numberFormat(product.costx5)}</Table.Td>
                </Table.Tr>
              </Table.Tbody>
              <Table.Tfoot>
                <Table.Tr>
                  <Table.Th />
                  <Table.Th>x1</Table.Th>
                  <Table.Th>x5</Table.Th>
                </Table.Tr>
              </Table.Tfoot>
            </Table>
          </div>

          <div className='w-[1px] bg-opacity-30 bg-black' />

          <div className='flex flex-col justify-start content-start gap-2'>
            <Text variant='h5'>{product.name}</Text>
            <Table outerBorders={false} horizontalBorders={false} radius='base' size='sm' striped={false}>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td align='left'>Price:</Table.Td>
                  <Table.Td align='center'>{numberFormat(price)}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td align='left'>Wish:</Table.Td>
                  <Table.Td align='center'>{numberFormat(wishPrice)}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td align='left'>Wish revenue:</Table.Td>
                  <Table.Td align='center'>{numberFormat(wishRevenue)}</Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td align='left'>Net worth:</Table.Td>
                  <Table.Td align='center'>{numberFormat(netWorth)}</Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </div>
        </div>
      </Popover.Content>
    </Popover>
  );
}
