import type { ThemeContextType } from "@rewind-ui/core";
import { ThemeProvider, useTheme } from "@rewind-ui/core";

import { ProductItem } from "./components";
import { avatarStyles } from "./theme";
import { Furniture } from "./types";

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
        <ProductItem product={Furniture.NEATLY_ARRANGED_TABLE} />
      </div>
    </ThemeProvider>
  );
}

export default App;
