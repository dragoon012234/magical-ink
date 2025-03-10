import { Avatar } from "@rewind-ui/core";

import type { Resource } from "../types";

type Props = {
  resource: Resource;
};

export function ResourceAvatar(props: Props) {
  const { resource } = props;
  return (
    <Avatar
      className='object-contain'
      color='white'
      tone='outline'
      radius='md'
      shadow='lg'
      shadowColor='black'
      size='xl'
      src={resource.img}
      alt={resource.name}
      initials={resource.name.replaceAll(/(^[A-Z])/g, "")}
    />
  );
}
