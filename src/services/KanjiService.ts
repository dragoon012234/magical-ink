import { Kanji } from "../types/Kanji";

type KanjiServiceType = {
  getAt(index: number): Kanji;
  getAll(): Kanji[];
};

const KanjiService = (() => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const module = require("../kanji-db.json");
  const _list = (module as any[]).map((entity) => new Kanji(entity));

  return {
    _list,
    getAt(index: number) {
      return this._list[index];
    },
    getAll() {
      return this._list;
    },
  } as any as KanjiServiceType;
})();

export { KanjiService };
