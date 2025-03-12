import { Popover, Ribbon, Table, Text } from "@rewind-ui/core";

import type { Resource } from "../types";
import { ResourceAvatar } from "./ResourceAvatar";
import { ProductSvg } from "../svgs";
import { numberFormat } from "../utils";

type Props = {
  resource: Resource;
};

export function ResourceItem(props: Props) {
  const { resource } = props;
  const { price, wishPrice } = resource;

  const wishRevenue = wishPrice - price;

  return (
    <Popover trigger='click' placement='bottom-start' shadow='md' radius='base'>
      <Popover.Trigger>
        <button className='relative'>
          <ResourceAvatar resource={resource} />
          {resource.isLastChainProduct && (
            <Ribbon className='z-50 -translate-x-1' color='blue' radius='lg' shadowColor='blue' size='sm' tone='glossy'>
              <ProductSvg size={16} className='text-white' />
            </Ribbon>
          )}
        </button>
      </Popover.Trigger>
      <Popover.Content>
        <div className='flex flex-col justify-start content-start gap-2'>
          <Text variant='h5'>{resource.name}</Text>
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
            </Table.Tbody>
          </Table>
        </div>
      </Popover.Content>
    </Popover>
  );
}
