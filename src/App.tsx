import type { ThemeContextType } from "@rewind-ui/core";
import { ThemeProvider, useTheme } from "@rewind-ui/core";

import { ResourceAvatar } from "./components";
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
      <ResourceAvatar resource={Furniture.NEATLY_ARRANGED_TABLE} />
      <ResourceAvatar resource={Furniture.RABBIT_SCULPTURE_CHAIR} />
      <ResourceAvatar resource={Furniture.RABBIT_SCULPTURE_DRAWER} />
    </ThemeProvider>
  );
}

export default App;
