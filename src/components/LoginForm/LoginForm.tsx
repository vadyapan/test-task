'use client';
import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@/src/gql/__generated__';
import { Button } from '@/src/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';

const LOGIN = gql(
  'mutation Login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    access_token\n    refresh_token\n  }\n}'
);

export function LoginForm() {
  const [login, { error, data }] = useMutation(LOGIN);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handleOnChangePassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  const handleLogin = (): void => {
    login({ variables: { email, password } });
  };

  if (error) return <h1>{error.message}</h1>;

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            placeholder='m@example.com'
            required
            onChange={(event) => handleOnChangeEmail(event)}
          />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            type='password'
            required
            onChange={(event) => handleOnChangePassword(event)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full' onClick={handleLogin}>
          Sign in
        </Button>
      </CardFooter>
    </Card>
  );
}
