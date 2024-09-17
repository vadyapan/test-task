'use client';
import { useRouter } from 'next/navigation';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/src/components/ui/avatar';
import { LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu';
import { Button } from '@/src/components/ui/button';

const ACCESS_TOKEN = 'access_token';

function deleteCookie(): void {
  document.cookie =
    ACCESS_TOKEN + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

export default function AccountMenu() {
  const router = useRouter();

  const signOut = (): void => {
    deleteCookie();
    router.push('/');
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className='h-9 w-9' asChild>
          <Button variant='ghost' size='icon' className='rounded-full'>
            <Avatar>
              <AvatarImage src='' />
              <AvatarFallback>EXT</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56'>
          <DropdownMenuItem className='cursor-pointer' onClick={signOut}>
            <LogOut className='mr-2 h-4 w-4' />
            <span>Log Out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
