/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const names = [
  [
    "i01_wooden_nail.png",
    "i02_wooden_plank.png",
    "i03_wooden_hammer.png",
    "i04_glass.png",
    "i05_nail.png",
    "i06_sand_grain_tweezers.png",
    "i07_mortar_and_pestle.png",
    "i08_pickaxe.png",
    "i09_sandpaper.png",
  ],
  ["i1_sand.png", "i2_soil.png", "i3_metal_scrap.png", "i4_iron_ore.png", "i5_copper_ore.png"],
  ["i1_rabbit_sculpture_chair.png", "i2_neatly_arranged_table.png", "i3_rabbit_sculpture_drawer.png"],
  ["i1_pebble.png", "i2_branch.png", "i3_boulder.png", "i4_log.png", "i5_herb.png"],
  ["i1_milk.png", "i2_egg.png", "i3_honey.png", "i4_gelatin.png"],
  [
    "i01_frosty_ice_grass.png",
    "i02_cold_crytal.png",
    "i03_aurora_mushroom.png",
    "i04_cactus_thorn.png",
    "i05_palm_fruit.png",
    "i06_sunlight_gold_dust.png",
    "i07_grave_robbers_sack.png",
    "i08_mana_permeated_thorn.png",
    "i09_golden_fruit.png",
    "i10_ancient_gold_coin.png",
  ],
];

function getFiles(/** @type {string} */ source, /** @type {string} */ ext) {
  return fs
    .readdirSync(source, { withFileTypes: true, recursive: true })
    .filter((dir) => dir.isFile() && path.extname(dir.name) === ext)
    .map((dir) => path.resolve(dir.parentPath, dir.name));
}

const root = "D:\\Dev\\magical-ink\\public\\imgs\\items";
const folders = [
  "5_materials_and_tools_production",
  "6_ore_generation",
  "7_furniture_production",
  "8_nature_circulation",
  "9_banish",
  "10_combat",
];
const files = folders.map((folder) => {
  const dir = path.join(root, folder);
  return {
    dir,
    files: getFiles(dir, ".png"),
  };
});

for (let i = 0; i < files.length; ++i) {
  const _dir = files[i].dir;
  const _files = files[i].files;
  const _names = names[i];
  for (let j = 0; j < _files.length; ++j) {
    const file = _files[j];
    const name = _names[j];
    fs.renameSync(file, path.join(_dir, name));
  }
}
