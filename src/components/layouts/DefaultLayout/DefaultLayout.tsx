import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

export interface Props {
  children: ReactNode;
}

export const DefaultLayout = (props: Props): JSX.Element => {
  return (
    <Box>
      <Box>{props.children}</Box>
    </Box>
  );
};
