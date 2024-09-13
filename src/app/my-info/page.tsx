'use client';

import { useQuery } from '@apollo/client';
import { gql } from '@/src/gql/__generated__';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/src/components/ui/avatar';
import { Header } from '../layouts/Header/Header';

const GET_PROFILE = gql(
  'query GetProfile {\n  myProfile {\n    id\n    name\n    avatar\n  }\n}'
);

export default function MyInfoPage() {
  // const { loading, error, data } = useQuery(GET_PROFILE);

  return <Header />; // потом убрать

  if (loading)
    return (
      <div className='flex flex-col items-center gap-8 pt-12 pb-24'>
        <h1>Loading...</h1>
      </div>
    );

  if (error) return <h1>error.message</h1>;

  return (
    <>
      <Header />
      <div className='container flex flex-col items-center gap-8 pt-12 pb-24'>
        <Avatar className='w-36 h-36'>
          <AvatarImage
            src={data?.myProfile.avatar}
            alt={data?.myProfile.name}
          />
          <AvatarFallback>IMG</AvatarFallback>
        </Avatar>
        <h1>{data?.myProfile.name}</h1>
      </div>
    </>
  );
}
