'use client';
import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@/src/gql/__generated__';
import { useRouter } from 'next/navigation';
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
import { useToast } from '@/hooks/use-toast';

const SING_IN = gql(
  'mutation SignIn($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    access_token\n    refresh_token\n  }\n}'
);

export const LoginForm: React.FC = () => {
  const [signIn] = useMutation(SING_IN);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const handleOnChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handleOnChangePassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  const handleSignIn = async () => {
    try {
      const response = await signIn({
        variables: { email, password },
      });

      if (response) {
        const { access_token, refresh_token } = response.data!.login;

        const expiresAccessToken = new Date();
        expiresAccessToken.setDate(expiresAccessToken.getDate() + 20);

        const expiresRefreshToken = new Date();
        expiresRefreshToken.setHours(expiresRefreshToken.getHours() + 10);

        document.cookie = `access_token=${access_token}; expires=${expiresAccessToken.toUTCString()};`;
        document.cookie = `refresh_token=${refresh_token}; expires=${expiresRefreshToken.toUTCString()}; httpOnly; Secure;`;

        toast({
          title: 'Success',
          description: 'Logged in successfully!',
        });

        router.push('/my-info');
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Invalid email or password',
        description: 'Try entering the data again',
      });
    }
  };

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
            className='bg-card'
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
            className='bg-card'
            id='password'
            type='password'
            required
            onChange={(event) => handleOnChangePassword(event)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className='w-full bg-primaryGray hover:bg-primaryGray/90'
          onClick={handleSignIn}
        >
          Sign in
        </Button>
      </CardFooter>
    </Card>
  );
};
