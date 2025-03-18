import { Card, Image, Text } from "@rewind-ui/core";
import { useNavigate } from "react-router";

import { CoinHandoverSvg, CoinSvg } from "../svgs";
import type { Resource } from "../types";
import { numberFormat } from "../utils";

type Props = {
  item: Resource;
};

export function ItemCard(props: Props) {
  const { item } = props;

  const navigate = useNavigate();

  console.log("Render", ItemCard.name, item.name);
  return (
    <Card
      className='w-60'
      shadow='md'
      onClick={() => navigate(`/magical-ink/items/${item.category.filename}/${item.filename}`)}
    >
      <Image caption={item.name} mode='light' src={item.img} alt={item.name} className='w-60 h-60 object-contain' />

      <Card.Body className='flex flex-col justify-start items-start gap-1'>
        <Text variant='h6' as='p'>
          {item.name}
        </Text>

        <div className='flex flex-row gap-1 justify-start items-center'>
          <CoinSvg size={24} />
          <Text>{numberFormat(item.price)}</Text>
        </div>

        <div className='flex flex-row gap-1 justify-start items-center'>
          <CoinHandoverSvg size={24} />
          <Text>{numberFormat(item.wishPrice)}</Text>
        </div>
      </Card.Body>
    </Card>
  );
}
