import { useTheme } from "@rewind-ui/core";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Layout } from "./layouts";
import { ItemsPage } from "./pages";
import { avatarStyles, sidebarStyles } from "./theme";

export default function App() {
  console.log("Render", App.name);
  const defaultTheme = useTheme();

  useEffect(() => {
    defaultTheme.components.Avatar.image = avatarStyles.image;
    defaultTheme.components.Sidebar.base = sidebarStyles.base;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='magical-ink' element={<Layout />}>
          <Route index element={<div>Dashboard</div>} />
          <Route path='items' element={<ItemsPage />} />
        </Route>
        <Route path='*' element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
