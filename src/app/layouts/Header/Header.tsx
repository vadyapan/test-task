import {
  Menubar,
  MenubarLabel,
  MenubarMenu,
} from '@/src/components/ui/menubar';
import { Input } from '@/src/components/ui/input';
import { Bell, CircleHelp, Menu, SearchIcon, Settings } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/src/components/ui/avatar';

export const Header: React.FC = () => {
  return (
    <header className='flex justify-center h-20 bg-card'>
      <nav className='container flex justify-between items-center'>
        <h1 className='text-xl font-semibold'>HarmonyHR</h1>

        <Menubar className='self-end pb-5 tablet:hidden'>
          <MenubarMenu>
            <MenubarLabel>Home</MenubarLabel>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarLabel className='bg-primary'>My Info</MenubarLabel>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarLabel>People</MenubarLabel>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarLabel>Hiring</MenubarLabel>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarLabel>Reports</MenubarLabel>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarLabel>Files</MenubarLabel>
          </MenubarMenu>
        </Menubar>

        <div className='flex self-end pb-4 gap-14 laptop:self-center laptop:pb-0'>
          <div className='relative laptop:hidden'>
            <Input
              type='search'
              className='w-96 pl-14 desktop:w-60'
              placeholder='Search'
            />
            <SearchIcon className='absolute top-3 left-4 h-4 w-4 text-slateBlue' />
          </div>
          <div className='flex items-center gap-6 text-slateBlue'>
            <SearchIcon className='hidden laptop:inline' />
            <Settings className='mobile:hidden' />
            <CircleHelp className='mobile:hidden' />
            <Bell />
            <Avatar className='h-9 w-9'>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>IMG</AvatarFallback>
            </Avatar>
            <Menu className='hidden tablet:inline' />
          </div>
        </div>
      </nav>
    </header>
  );
};
