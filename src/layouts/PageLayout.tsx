import { Button, useSidebar } from "@rewind-ui/core";
import type { PropsWithChildren, ReactNode } from "react";

import { MenuSvg } from "../svgs";

type Props = PropsWithChildren<{
  title: ReactNode;
}>;

export function PageLayout(props: Props) {
  const { title, children } = props;
  const sidebar = useSidebar();

  return (
    <>
      <header className='flex flex-row sticky top-0 px-8 justify-between items-center gap-4 bg-white border-b border-b-gray-100 w-full shadow-sm min-h-[4rem]'>
        {title}

        <Button onClick={() => sidebar.toggleMobile()} size='sm' color='white' icon className='min-w-8 md:hidden'>
          <MenuSvg size={24} className='text-black' />
        </Button>
      </header>

      <div className='w-full h-full p-8'>{children}</div>
    </>
  );
}
