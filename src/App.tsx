import type { ThemeContextType } from "@rewind-ui/core";
import { ThemeProvider, useTheme } from "@rewind-ui/core";

import { ProduceTable } from "./components";
import { avatarStyles } from "./theme";
import { AlchemizeProduct } from "./types";

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

  return (
    <ThemeProvider value={themeContext}>
      <div className='m-10'>
        <ProduceTable referenceResource={AlchemizeProduct.NATURES_MAGIC_POWDER} />
      </div>
    </ThemeProvider>
  );
}

export default App;
