import type { ThemeContextType } from "@rewind-ui/core";
import { ThemeProvider, useTheme } from "@rewind-ui/core";

import { ProduceTable } from "./components";
import { avatarStyles } from "./theme";
import { Furniture, items, MaterialTool, NatureItem } from "./types";

function App() {
  const defaultTheme = useTheme();

  const themeContext: ThemeContextType = {
    theme: {
      components: {
        ...defaultTheme.components,
        Avatar: { ...defaultTheme.components.Avatar, ...avatarStyles },
      },
    },
  };

  console.log(items);

  return (
    <ThemeProvider value={themeContext}>
      <div className='flex flex-col gap-2 m-10'>
        <ProduceTable referenceResource={MaterialTool.NAIL} />
        <ProduceTable referenceResource={NatureItem.PEBBLE} />
        <ProduceTable referenceResource={NatureItem.HERB} />
        <ProduceTable referenceResource={Furniture.NEATLY_ARRANGED_TABLE} />
        <ProduceTable referenceResource={Furniture.RABBIT_SCULPTURE_CHAIR} />
        <ProduceTable referenceResource={Furniture.RABBIT_SCULPTURE_DRAWER} />
      </div>
    </ThemeProvider>
  );
}

export default App;
