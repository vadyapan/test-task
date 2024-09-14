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
        <div className='container max-w-7xl flex gap-6'>
          <UserInfo
            userName='Shime'
            avatarUrl='https://github.com/shadcn.png'
          />
          <MyInfo userName='Alexandra Kuibyshevskaya' />
        </div>
      </div>
    </>
  );
}
