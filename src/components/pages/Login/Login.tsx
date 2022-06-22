import React from 'react';
import { Box, Button, Container, Input, SimpleGrid } from '@chakra-ui/react';
import { useMutation } from 'react-query';
import { useForm } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';

import { DtoLoginForm } from '../../../domain/dto';

import { PublicLayout } from '../../layouts';

export interface Props {}

export const Login = (props: Props): JSX.Element => {
  const { handleSubmit, register } = useForm<DtoLoginForm>({
    resolver: classValidatorResolver(DtoLoginForm),
  });
  const { mutateAsync: login } = useMutation<
    DtoLoginForm,
    unknown,
    DtoLoginForm
  >(async (data) => {
    const res = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return await res.json();
  });

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
