import React from 'react';
import { Box, Button, Container, Input, SimpleGrid } from '@chakra-ui/react';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';

import { PublicLayout } from '../../layouts';

export interface Props {}

interface FormData {
  email: string;
  password: string;
}

export const Login = (props: Props): JSX.Element => {
  const { handleSubmit, register } = useForm<FormData>();
  const { mutateAsync: login } = useMutation<FormData, unknown, FormData>(
    async (data) => {
      const res = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      return await res.json();
    }
  );

  const onSubmit = handleSubmit(async (data) => {
    await login(data);
  });

  return (
    <PublicLayout>
      <Container>
        <Box as="form" onSubmit={onSubmit}>
          <SimpleGrid columns={2}>
            <Input {...register('email')} />
            <Input {...register('password')} />
          </SimpleGrid>
          <Box>
            <Button type="submit">Login</Button>
          </Box>
        </Box>
      </Container>
    </PublicLayout>
  );
};
