import type { SidebarState, ThemeContextType } from "@rewind-ui/core";
import { Button, Overlay, Sidebar, ThemeProvider, useSidebar, useTheme } from "@rewind-ui/core";
import { useState } from "react";

import { ProductSvg } from "./svgs";
import { MenuSvg } from "./svgs/MenuSvg";
import { avatarStyles, sidebarStyles } from "./theme";

function App() {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);
  const sidebar = useSidebar();

  const defaultTheme = useTheme();

  const themeContext: ThemeContextType = {
    theme: {
      components: {
        ...defaultTheme.components,
        Avatar: { ...defaultTheme.components.Avatar, ...avatarStyles },
        Sidebar: { ...defaultTheme.components.Sidebar, ...sidebarStyles },
      },
    },
  };

  return (
    <ThemeProvider value={themeContext}>
      <Sidebar
        color='gray'
        onToggle={(state: SidebarState) => {
          setExpanded(state.expanded);
          setMobile(state.mobile);
        }}
      >
        <Sidebar.Head>
          <Sidebar.Head.Logo>
            <img src={`${process.env.PUBLIC_URL}/favicon.ico`} width={48} height={48} alt='' />
          </Sidebar.Head.Logo>
          <Sidebar.Head.Title>Magical Ink</Sidebar.Head.Title>
          <Sidebar.Head.Toggle />
        </Sidebar.Head>

        <Sidebar.Nav>
          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Item icon={<ProductSvg />} label='Dashboard' as='button' active />
          </Sidebar.Nav.Section>

          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>Library</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item icon={<ProductSvg />} label='Items' as='button' />
            <Sidebar.Nav.Section.Item icon={<ProductSvg />} label='Skills' as='button' />
            <Sidebar.Nav.Section.Item icon={<ProductSvg />} label='Relics' as='button' />
          </Sidebar.Nav.Section>
        </Sidebar.Nav>

        <Sidebar.Footer>
          <div className='flex flex-col justify-center items-center text-sm'>
            <span className='font-semibold'>Magical Ink Notebook</span>
            <span>version 0.0.1</span>
          </div>
        </Sidebar.Footer>
      </Sidebar>

      <div className='flex flex-row w-full h-full'>
        <main
          className={`transition-all transform duration-100 text-slate-700 flex w-full min-h-lvh flex-col items-center ${
            expanded ? "md:ml-64" : "md:ml-20"
          }`}
        >
          {mobile && (
            <Overlay
              blur='none'
              onClick={() => {
                sidebar.toggleMobile();
              }}
              className='md:hidden z-40'
            />
          )}
          <header className='flex flex-row sticky top-0 px-8 items-center bg-white border-b border-b-gray-100 w-full shadow-sm min-h-[4rem]'>
            <span>Navbar</span>

            <Button
              onClick={() => {
                sidebar.toggleMobile();
              }}
              size='sm'
              color='white'
              icon
              className='ml-auto flex md:hidden'
            >
              <MenuSvg size={24} className='text-black' />
            </Button>
          </header>

          <div className='w-full h-full p-8'>
            <p>Dashboard</p>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
