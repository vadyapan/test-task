'use client';

import { useQuery } from '@apollo/client';
import { gql } from '@/src/gql/__generated__';
import { Header } from '../layouts/Header/Header';
import { UserInfo } from '@/src/components/UserInfo/UserInfo';
import { MyInfo } from '@/src/components/MyInfo/MyInfo';

const GET_PROFILE = gql(
  'query GetProfile {\n  myProfile {\n    id\n    name\n    avatar\n  }\n}'
);

export default function MyInfoPage() {
  const { loading, error, data } = useQuery(GET_PROFILE);

  if (loading)
    return (
      <div className='flex justify-center items-center h-screen text-4xl font-medium'>
        <h1>Loading...</h1>
      </div>
    );

  if (error)
    return (
      <div className='flex gap-2 justify-center items-center h-screen text-4xl font-medium'>
        <h1>error.message</h1>
      </div>
    );

  return (
    <>
      <Header />
      <div className='bg-primary h-48'>
        <div className='container max-w-7xl flex gap-6 tablet:p-0'>
          <UserInfo
            userName={data!.myProfile.name}
            avatarUrl={data!.myProfile.avatar}
          />
          <MyInfo
            userName={data!.myProfile.name}
            avatarUrl={data!.myProfile.avatar}
          />
        </div>
      </div>
    </>
  );
}
