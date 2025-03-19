import { Text } from "@rewind-ui/core";

type Props = {
  title: string;
};

export function SectionTitle(props: Props) {
  return (
    <Text variant='h3' className='border-y-2 border-opacity-60 border-blue-400 px-2'>
      {props.title}
    </Text>
  );
}
