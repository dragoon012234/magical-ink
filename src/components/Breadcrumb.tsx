import { Breadcrumbs } from "@rewind-ui/core";
import type { ReactNode } from "react";

import { HomeSvg } from "../svgs";

type BreadcrumbProps = {
  items: {
    content: ReactNode;
    href?: string;
  }[];
};

export function Breadcrumb(props: BreadcrumbProps) {
  const { items } = { ...props };

  return (
    <Breadcrumbs className='flex-1 flex-wrap'>
      <Breadcrumbs.Item>
        <HomeSvg size={20} />
      </Breadcrumbs.Item>
      {items.map((item, i) => (
        <Breadcrumbs.Item key={`item_${i}`} href={item.href}>
          {item.content}
        </Breadcrumbs.Item>
      ))}
    </Breadcrumbs>
  );
}
