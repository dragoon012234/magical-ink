import { Badge } from "@rewind-ui/core";

import type { Ingredient } from "../types";

type Props = Ingredient;

export function IngredientChip(props: Props) {
  const { ingredient, count } = props;
  return (
    <Badge key={ingredient.name} color='green' radius='md' shadow='base' shadowColor='green' size='xs' tone='outline'>
      <img alt={ingredient.name} src={ingredient.img} className='w-4 h-4 object-contain mr-0.5' />
      {`${ingredient.name} x${count}`}
    </Badge>
  );
}
