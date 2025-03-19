import type { SidebarState } from "@rewind-ui/core";
import { Overlay, Sidebar, useSidebar } from "@rewind-ui/core";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";

import { ProductSvg } from "../svgs";
import { FarmProduct } from "../types";

export function Layout() {
  console.log("Render", Layout.name);
  const location = useLocation();
  const [sidebarState, setSidebarState] = useState<SidebarState>({ expanded: false, hovered: false, mobile: false });
  const sidebar = useSidebar();

  const expanded = sidebarState.expanded;
  const mobile = sidebarState.mobile;

  return (
    <>
      <Sidebar expanded={false} color='gray' shadow='md' onToggle={setSidebarState}>
        <Sidebar.Head>
          <Sidebar.Head.Logo>
            <img className='w-8 h-8 object-contain' src={FarmProduct.WHEAT.img} width={32} height={32} alt='icon' />
          </Sidebar.Head.Logo>
          <Sidebar.Head.Title>Magical Ink</Sidebar.Head.Title>
          <Sidebar.Head.Toggle />
        </Sidebar.Head>

        <Sidebar.Nav>
          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Item icon={<ProductSvg />} label='Dashboard' as='button' />
          </Sidebar.Nav.Section>

          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>Library</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item
              icon={<ProductSvg />}
              label='Items'
              as={Link}
              asProps={{ prefetch: "none", to: "/magical-ink/items" }}
              active={location.pathname.startsWith("/magical-ink/items")}
            />
            <Sidebar.Nav.Section.Item
              icon={<ProductSvg />}
              label='Skills'
              as={Link}
              asProps={{ prefetch: "none", to: "/magical-ink/skills" }}
              active={location.pathname.startsWith("/magical-ink/skills")}
            />
            <Sidebar.Nav.Section.Item
              icon={<ProductSvg />}
              label='Relics'
              as={Link}
              asProps={{ prefetch: "none", to: "/magical-ink/relics" }}
              active={location.pathname.startsWith("/magical-ink/relics")}
            />
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
          {mobile && <Overlay blur='none' onClick={() => sidebar.toggleMobile()} className='md:hidden z-40' />}

          <Outlet />
        </main>
      </div>
    </>
  );
}
