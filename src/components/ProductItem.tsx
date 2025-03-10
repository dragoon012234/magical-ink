import { Popover } from "@rewind-ui/core";

import type { Product } from "../types";
import { ResourceAvatar } from "./ResourceAvatar";

type Props = {
  product: Product;
};

export function ProductItem(props: Props) {
  const { product } = props;

  return (
    <Popover trigger='click' placement='bottom-start' shadow='md' radius='base'>
      <Popover.Trigger>
        <button>
          <ResourceAvatar resource={product} />
        </button>
      </Popover.Trigger>
      <Popover.Content>Halo</Popover.Content>
    </Popover>
  );
}
