import { AlchemizeProduct } from "./AlchemizeProduct";
import { CookingProduct } from "./CookingProduct";
import { EngravingProduct } from "./EngravingProduct";
import { FarmProduct } from "./FarmProduct";
import { Furniture } from "./Furniture";
import { MaterialTool } from "./MaterialTool";
import { MonsterItem } from "./MonsterItem";
import { NatureItem } from "./NatureItem";
import { Ore } from "./Ore";
import { Product } from "./Product";
import { Resource } from "./Resource";
import { Skill } from "./Skill";
import { TailorProduct } from "./TailorProduct";
import { TreeFarmProduct } from "./TreeFarmProduct";
import { WorldMonsterItem } from "./WoldMonsterItem";

const items: (Product | Resource)[] = [
  FarmProduct.all(),
  TreeFarmProduct.all(),

  CookingProduct.all(),
  AlchemizeProduct.all(),
  MaterialTool.all(),
  Ore.all(),
  Furniture.all(),
  TailorProduct.all(),
  EngravingProduct.all(),

  NatureItem.all(),
  WorldMonsterItem.all(),
  MonsterItem.all(),
].flat();

(function setupCookingIngredient() {
  CookingProduct.RYE_BREAD.ingredient.push({ ingredient: FarmProduct.WHEAT, count: 2 });
  CookingProduct.STRAWBERRY_JUICE.ingredient.push({ ingredient: FarmProduct.STRAWBERRY, count: 2 });
  CookingProduct.APPLE_JUICE.ingredient.push({ ingredient: TreeFarmProduct.APPLE, count: 2 });
  CookingProduct.TOMATO_SALAD.ingredient.push({ ingredient: FarmProduct.TOMATO, count: 2 });
  CookingProduct.RAISIN_BREAD.ingredient.push(
    { ingredient: FarmProduct.WHEAT, count: 2 },
    { ingredient: TreeFarmProduct.GRAPE, count: 2 },
  );
  CookingProduct.TOAST.ingredient.push(
    { ingredient: FarmProduct.WHEAT, count: 2 },
    { ingredient: WorldMonsterItem.MILK, count: 2 },
  );
  CookingProduct.ORANGE_MARMALADE.ingredient.push(
    { ingredient: FarmProduct.POPPURI_PETAL, count: 1 },
    { ingredient: TreeFarmProduct.ORANGE, count: 2 },
  );
  CookingProduct.SCRAMBLE.ingredient.push(
    { ingredient: WorldMonsterItem.EGG, count: 2 },
    { ingredient: WorldMonsterItem.MILK, count: 2 },
  );
  CookingProduct.CARROT_STEW.ingredient.push(
    { ingredient: FarmProduct.CARROT, count: 2 },
    { ingredient: WorldMonsterItem.EGG, count: 2 },
  );
  CookingProduct.MAPLE_SYRUP.ingredient.push(
    { ingredient: TreeFarmProduct.MAPPLE_SAP, count: 2 },
    { ingredient: WorldMonsterItem.HONEY, count: 2 },
  );
  CookingProduct.SUGAR.ingredient.push(
    { ingredient: FarmProduct.SUGAR_CANE, count: 2 },
    { ingredient: AlchemizeProduct.FORESTS_MAGIC_POWDER, count: 1 },
  );
  CookingProduct.BOTTLED_PEACHES.ingredient.push(
    { ingredient: TreeFarmProduct.PEACH, count: 2 },
    { ingredient: AlchemizeProduct.COLD_RESISTANCE_POTION, count: 1 },
  );
  CookingProduct.HERB_OIL.ingredient.push(
    { ingredient: FarmProduct.ROSEMARY, count: 2 },
    { ingredient: AlchemizeProduct.NATURES_MAGIC_POWDER, count: 1 },
  );
  CookingProduct.ROSEMARY_TEA.ingredient.push(
    { ingredient: FarmProduct.ROSEMARY, count: 2 },
    { ingredient: AlchemizeProduct.CONCENTRATION_POTION, count: 1 },
  );
  CookingProduct.ROSEMARY_FOCACCIA.ingredient.push(
    { ingredient: FarmProduct.ROSEMARY, count: 2 },
    { ingredient: AlchemizeProduct.STICKY_HERB_LUMP, count: 1 },
    { ingredient: FarmProduct.WHEAT, count: 2 },
  );
  CookingProduct.CHERRY_JUICE.ingredient.push(
    { ingredient: TreeFarmProduct.CHERRY, count: 2 },
    { ingredient: AlchemizeProduct.SPIRIT_SPRING_WATER, count: 1 },
  );
  CookingProduct.LAVENDER_COOKIE.ingredient.push(
    { ingredient: FarmProduct.LAVENDER, count: 2 },
    { ingredient: AlchemizeProduct.SPIRIT_SPRING_WATER, count: 1 },
    { ingredient: WorldMonsterItem.EGG, count: 1 },
  );
  CookingProduct.CHEESE.ingredient.push(
    { ingredient: WorldMonsterItem.MILK, count: 2 },
    { ingredient: AlchemizeProduct.NATURES_MAGIC_POWDER, count: 1 },
    { ingredient: Ore.SALT, count: 2 },
  );
  CookingProduct.CHERRY_CUPCAKE.ingredient.push(
    { ingredient: CookingProduct.RYE_BREAD, count: 2 },
    { ingredient: TreeFarmProduct.CHERRY, count: 1 },
    { ingredient: AlchemizeProduct.LARGE_RED_POTION, count: 1 },
  );
  CookingProduct.FRUIT_TEA.ingredient.push(
    { ingredient: TreeFarmProduct.GRAPE, count: 1 },
    { ingredient: FarmProduct.ROSEMARY, count: 1 },
    { ingredient: AlchemizeProduct.LARGE_BLUE_POTION, count: 1 },
  );
  CookingProduct.PUMPKIN_SOUP.ingredient.push(
    { ingredient: FarmProduct.PUMPKIN, count: 2 },
    { ingredient: AlchemizeProduct.STICKY_HERB_LUMP, count: 2 },
  );
  CookingProduct.PUMPKIN_PIE.ingredient.push(
    { ingredient: FarmProduct.PUMPKIN, count: 1 },
    { ingredient: AlchemizeProduct.CRIMSON_FLAME_POTION, count: 1 },
  );
})();

(function setupAlchemizeIngredient() {
  AlchemizeProduct.SMALL_RED_POTION.ingredient.push(
    { ingredient: NatureItem.HERB, count: 2 },
    { ingredient: FarmProduct.STRAWBERRY, count: 2 },
  );
  AlchemizeProduct.SMALL_BLUE_POTION.ingredient.push(
    { ingredient: NatureItem.HERB, count: 2 },
    { ingredient: TreeFarmProduct.GRAPE, count: 2 },
  );
  AlchemizeProduct.FORESTS_MAGIC_POWDER.ingredient.push(
    { ingredient: FarmProduct.POPPURI_PETAL, count: 1 },
    { ingredient: TreeFarmProduct.APPLE, count: 2 },
  );
  AlchemizeProduct.COLD_RESISTANCE_POTION.ingredient.push(
    { ingredient: TreeFarmProduct.GRAPE, count: 1 },
    { ingredient: WorldMonsterItem.MILK, count: 2 },
  );
  AlchemizeProduct.MEDIUM_RED_POTION.ingredient.push(
    { ingredient: NatureItem.HERB, count: 2 },
    { ingredient: FarmProduct.TOMATO, count: 2 },
    { ingredient: FarmProduct.POPPURI_PETAL, count: 2 },
  );
  AlchemizeProduct.MEDIUM_BLUE_POTION.ingredient.push(
    { ingredient: NatureItem.HERB, count: 2 },
    { ingredient: TreeFarmProduct.ORANGE, count: 2 },
    { ingredient: FarmProduct.POPPURI_PETAL, count: 2 },
  );
  AlchemizeProduct.NATURES_MAGIC_POWDER.ingredient.push(
    { ingredient: TreeFarmProduct.MAPPLE_SAP, count: 1 },
    { ingredient: FarmProduct.CARROT, count: 2 },
  );
  AlchemizeProduct.STURDY_POTION.ingredient.push(
    { ingredient: WorldMonsterItem.HONEY, count: 1 },
    { ingredient: FarmProduct.CARROT, count: 2 },
  );
  AlchemizeProduct.CONCENTRATION_POTION.ingredient.push(
    { ingredient: WorldMonsterItem.GELATIN, count: 1 },
    { ingredient: TreeFarmProduct.MAPPLE_SAP, count: 2 },
  );
  AlchemizeProduct.STICKY_HERB_LUMP.ingredient.push(
    { ingredient: WorldMonsterItem.GELATIN, count: 2 },
    { ingredient: FarmProduct.SUGAR_CANE, count: 2 },
  );
  AlchemizeProduct.SPIRIT_SPRING_WATER.ingredient.push(
    { ingredient: MaterialTool.GLASS, count: 1 },
    { ingredient: TreeFarmProduct.PEACH, count: 2 },
  );
  AlchemizeProduct.LARGE_RED_POTION.ingredient.push(
    { ingredient: TreeFarmProduct.CHERRY, count: 1 },
    { ingredient: MaterialTool.MORTAR_AND_PESTLE, count: 1 },
  );
  AlchemizeProduct.LARGE_BLUE_POTION.ingredient.push(
    { ingredient: FarmProduct.LAVENDER, count: 1 },
    { ingredient: MaterialTool.MORTAR_AND_PESTLE, count: 1 },
  );
  AlchemizeProduct.CRIMSON_FLAME_POTION.ingredient.push(
    { ingredient: WorldMonsterItem.MUSHROOM, count: 1 },
    { ingredient: Ore.COAL, count: 1 },
  );
  AlchemizeProduct.SILVER_ILLUSION_POWDER.ingredient.push(
    { ingredient: Ore.SILVER_ORE, count: 1 },
    { ingredient: MaterialTool.GLASS, count: 1 },
  );
  AlchemizeProduct.MAGIC_CATALYST.ingredient.push(
    { ingredient: Ore.SILVER_ORE, count: 1 },
    { ingredient: MaterialTool.SAND_GRAIN_TWEEZERS, count: 1 },
  );
  AlchemizeProduct.HEAVENLY_MAGIC_POWDER.ingredient.push(
    { ingredient: TreeFarmProduct.CHERRY, count: 2 },
    { ingredient: FarmProduct.PUMPKIN, count: 2 },
    { ingredient: Ore.SALT, count: 1 },
  );
})();

(function setupMaterialToolIngredient() {
  MaterialTool.WOODEN_NAIL.ingredient.push({ ingredient: NatureItem.BRANCH, count: 3 });
  MaterialTool.WOODEN_PLANK.ingredient.push({ ingredient: NatureItem.LOG, count: 3 });
  MaterialTool.WOODEN_HAMMER.ingredient.push(
    { ingredient: NatureItem.LOG, count: 4 },
    { ingredient: NatureItem.BRANCH, count: 2 },
  );
  MaterialTool.GLASS.ingredient.push({ ingredient: Ore.SAND, count: 1 });
  MaterialTool.NAIL.ingredient.push({ ingredient: Ore.METAL_SCRAP, count: 1 });
  MaterialTool.SAND_GRAIN_TWEEZERS.ingredient.push(
    { ingredient: Ore.METAL_SCRAP, count: 1 },
    { ingredient: NatureItem.BRANCH, count: 2 },
  );
  MaterialTool.MORTAR_AND_PESTLE.ingredient.push(
    { ingredient: Ore.SOIL, count: 2 },
    { ingredient: MaterialTool.WOODEN_HAMMER, count: 1 },
  );
  MaterialTool.PICKAXE.ingredient.push(
    { ingredient: Ore.IRON_ORE, count: 1 },
    { ingredient: AlchemizeProduct.STURDY_POTION, count: 1 },
  );
  MaterialTool.SANDPAPER.ingredient.push(
    { ingredient: MaterialTool.NAIL, count: 1 },
    { ingredient: Ore.SAND, count: 2 },
  );
  MaterialTool.TOOL_BAG.ingredient.push(
    { ingredient: Ore.COPPER_ORE, count: 1 },
    { ingredient: MaterialTool.WOODEN_NAIL, count: 1 },
    { ingredient: CookingProduct.SUGAR, count: 2 },
  );
  MaterialTool.CRIMSON_FLAME_LAMP.ingredient.push(
    { ingredient: AlchemizeProduct.CRIMSON_FLAME_POTION, count: 1 },
    { ingredient: NatureItem.LOG, count: 2 },
  );
  MaterialTool.SILVER_INGOT.ingredient.push(
    { ingredient: Ore.SILVER_ORE, count: 1 },
    { ingredient: AlchemizeProduct.NATURES_MAGIC_POWDER, count: 2 },
  );
  MaterialTool.GOLD_INGOT.ingredient.push(
    { ingredient: Ore.GOLD_ORE, count: 1 },
    { ingredient: AlchemizeProduct.CONCENTRATION_POTION, count: 2 },
  );
  MaterialTool.EBONY_NEEDLE.ingredient.push(
    { ingredient: TreeFarmProduct.EBONY_WOOD, count: 1 },
    { ingredient: AlchemizeProduct.SILVER_ILLUSION_POWDER, count: 1 },
  );
})();

(function setupOreIngredient() {
  Ore.SAND.ingredient.push({ ingredient: NatureItem.PEBBLE, count: 2 });
  Ore.SOIL.ingredient.push({ ingredient: NatureItem.PEBBLE, count: 4 });
  Ore.METAL_SCRAP.ingredient.push({ ingredient: NatureItem.BOULDER, count: 2 });
  Ore.IRON_ORE.ingredient.push({ ingredient: NatureItem.BOULDER, count: 4 });
  Ore.COPPER_ORE.ingredient.push(
    { ingredient: NatureItem.PEBBLE, count: 2 },
    { ingredient: NatureItem.BOULDER, count: 2 },
  );
  Ore.SALT.ingredient.push({ ingredient: MaterialTool.WOODEN_HAMMER, count: 2 });
  Ore.COAL.ingredient.push({ ingredient: MaterialTool.WOODEN_HAMMER, count: 2 });
  Ore.SILVER_ORE.ingredient.push({ ingredient: MaterialTool.PICKAXE, count: 1 });
  Ore.GOLD_ORE.ingredient.push({ ingredient: MaterialTool.PICKAXE, count: 1 });
})();

(function setupFurnitureIngredient() {
  Furniture.RABBIT_SCULPTURE_CHAIR.ingredient.push(
    { ingredient: Ore.METAL_SCRAP, count: 1 },
    { ingredient: MaterialTool.WOODEN_PLANK, count: 1 },
  );
  Furniture.NEATLY_ARRANGED_TABLE.ingredient.push(
    { ingredient: MaterialTool.NAIL, count: 1 },
    { ingredient: CookingProduct.HERB_OIL, count: 1 },
    { ingredient: NatureItem.LOG, count: 4 },
  );
  Furniture.RABBIT_SCULPTURE_DRAWER.ingredient.push(
    { ingredient: MaterialTool.SANDPAPER, count: 1 },
    { ingredient: AlchemizeProduct.CONCENTRATION_POTION, count: 1 },
    { ingredient: NatureItem.LOG, count: 4 },
  );
  Furniture.SOFA.ingredient.push(
    { ingredient: MaterialTool.WOODEN_NAIL, count: 2 },
    { ingredient: TailorProduct.FAIRY_CLOTH, count: 1 },
  );
  Furniture.WARDROBE.ingredient.push(
    { ingredient: MaterialTool.SANDPAPER, count: 1 },
    { ingredient: AlchemizeProduct.SPIRIT_SPRING_WATER, count: 1 },
  );
  Furniture.TEA_TABLE.ingredient.push(
    { ingredient: MaterialTool.SANDPAPER, count: 1 },
    { ingredient: CookingProduct.ROSEMARY_TEA, count: 1 },
  );
  Furniture.EBONY_BED.ingredient.push(
    { ingredient: TreeFarmProduct.EBONY_WOOD, count: 1 },
    { ingredient: MaterialTool.TOOL_BAG, count: 1 },
  );
})();

(function setupTailorIngredient() {
  TailorProduct.FAIRY_CLOTH.ingredient.push(
    { ingredient: TreeFarmProduct.COTTON, count: 2 },
    { ingredient: WorldMonsterItem.MUSHROOM, count: 1 },
  );
  TailorProduct.SMALL_HAT.ingredient.push(
    { ingredient: TreeFarmProduct.COTTON, count: 2 },
    { ingredient: MaterialTool.SAND_GRAIN_TWEEZERS, count: 1 },
  );
  TailorProduct.SMALL_CLOTHES.ingredient.push(
    { ingredient: TailorProduct.FAIRY_CLOTH, count: 1 },
    { ingredient: AlchemizeProduct.STURDY_POTION, count: 1 },
  );
  TailorProduct.FUR_BALL.ingredient.push(
    { ingredient: WorldMonsterItem.WHITE_FUR, count: 1 },
    { ingredient: MaterialTool.TOOL_BAG, count: 1 },
  );
})();

(function setupEngraveIngredient() {
  EngravingProduct.SILVER_RING.ingredient.push(
    { ingredient: Ore.SILVER_ORE, count: 1 },
    { ingredient: MaterialTool.SAND_GRAIN_TWEEZERS, count: 1 },
  );
  EngravingProduct.GOLD_RING.ingredient.push(
    { ingredient: Ore.GOLD_ORE, count: 1 },
    { ingredient: MaterialTool.SANDPAPER, count: 1 },
  );
  EngravingProduct.SILVER_DECORATION.ingredient.push(
    { ingredient: AlchemizeProduct.SILVER_ILLUSION_POWDER, count: 1 },
    { ingredient: MaterialTool.TOOL_BAG, count: 1 },
  );
})();

(function setupIngredientChain() {
  const layeredItems: Resource[][] = [];

  let remainItems = items.length;

  const ingredientItems = [];
  for (let i = 0; i < items.length; ++i) {
    const item = items[i];
    if (item instanceof Product) {
      if (item.ingredient.length === 0) {
        item.layer = 1;
        ingredientItems.push(item);
      }
    } else {
      item.layer = 1;
      ingredientItems.push(item);
    }
  }
  layeredItems.push(ingredientItems);
  remainItems -= ingredientItems.length;

  let layerNumber = 1;
  while (remainItems > 0) {
    const layer = [];
    ++layerNumber;

    for (let i = 0; i < items.length; ++i) {
      const item = items[i] as Product; // As this rate, there are no Resource anymore
      if (item.layer !== 0) continue;

      let isThisLayer = true;
      for (const { ingredient } of item.ingredient) {
        if (ingredient.layer === 0 || ingredient.layer >= layerNumber) {
          isThisLayer = false;
          break;
        }
      }

      if (isThisLayer) {
        item.layer = layerNumber;
        layer.push(item);
      }
    }

    layeredItems.push(layer);
    remainItems -= layer.length;
  }

  for (const item of items)
    if (item instanceof Product)
      for (const { ingredient } of item.ingredient) {
        ingredient.isLastChainProduct = false;
        ingredient.ingredientFor.push(item);
      }
})();

function findItem(item?: string, category?: string) {
  return items.find((v) => v.filename === item && v.category.filename === category);
}

const skills = [
  Skill.NATURE_CIRCULATION,
  Skill.BANISH,
  Skill.COMBAT,

  Skill.FARM,
  Skill.TREE_FARM,

  Skill.COOKING,
  Skill.ALCHEMIZE,
  Skill.MATERIALS_AND_TOOLS_PRODUCTION,
  Skill.ORE_GENERATION,
  Skill.FURNITURE_PRODUCTION,
  Skill.TAILORING,
  Skill.ENGRAVING,
];

export {
  Skill,
  Resource,
  Product,
  FarmProduct,
  TreeFarmProduct,
  CookingProduct,
  AlchemizeProduct,
  MaterialTool,
  Ore,
  Furniture,
  TailorProduct,
  EngravingProduct,
  NatureItem,
  WorldMonsterItem,
  MonsterItem,
  items,
  skills,
  findItem,
};

export * from "./Ingredient";
