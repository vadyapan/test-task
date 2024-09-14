'use client';

import { useQuery } from '@apollo/client';
import { gql } from '@/src/gql/__generated__';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/src/components/ui/avatar';
import { Header } from '../layouts/Header/Header';
import { UserInfo } from '@/src/components/UserInfo/UserInfo';

const GET_PROFILE = gql(
  'query GetProfile {\n  myProfile {\n    id\n    name\n    avatar\n  }\n}'
);

export default function MyInfoPage() {
  // const { loading, error, data } = useQuery(GET_PROFILE);

  // if (loading)
  //   return (
  //     <div className='flex flex-col items-center gap-8 pt-12 pb-24'>
  //       <h1>Loading...</h1>
  //     </div>
  //   );

  // if (error) return <h1>error.message</h1>;

  return (
    <>
      <Header />
      <div className='bg-primary h-48'>
        <div className='max-w-7xl mx-auto pl-6 pr-6'>
          {/* <Avatar className='w-36 h-36'>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>IMG</AvatarFallback>
          </Avatar>
          <h1 className='text-3xl font-semibold'>Alexandra Kuibyshevskaya</h1> */}
          <div>
            <UserInfo name='Shime' avatarUrl='https://github.com/shadcn.png' />
          </div>
        </div>
      </div>
    </>
  );
}
