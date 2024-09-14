import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/src/components/ui/select';
import {
  MyInfobar,
  MyInfobarLabel,
  MyInfobarMenu,
} from '@/src/components/ui/myinfobar';
import { ChevronDown, Settings } from 'lucide-react';

interface MyInfoProps {
  userName: string;
}

export const MyInfo: React.FC<MyInfoProps> = ({ userName }) => {
  return (
    <div className='mt-16 flex flex-col grow'>
      <header className='flex flex-col gap-11'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-3xl font-semibold'>{userName}</h1>
          </div>
          <div className='flex gap-4'>
            <Select>
              <SelectTrigger className='w-40'>
                <SelectValue placeholder='Request a Change' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='1'>1</SelectItem>
                <SelectItem value='2'>2</SelectItem>
                <SelectItem value='3'>3</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className='w-14'>
                <SelectValue />
                <Settings className='h-4 w-4 text-slateBlue' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='1'>1</SelectItem>
                <SelectItem value='2'>2</SelectItem>
                <SelectItem value='3'>3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <MyInfobar>
            <MyInfobarMenu>
              <MyInfobarLabel>Personal</MyInfobarLabel>
            </MyInfobarMenu>
            <MyInfobarMenu>
              <MyInfobarLabel>Job</MyInfobarLabel>
            </MyInfobarMenu>
            <MyInfobarMenu>
              <MyInfobarLabel className='bg-card'>Time Off</MyInfobarLabel>
            </MyInfobarMenu>
            <MyInfobarMenu>
              <MyInfobarLabel>Emergency</MyInfobarLabel>
            </MyInfobarMenu>
            <MyInfobarMenu>
              <MyInfobarLabel>Documents</MyInfobarLabel>
            </MyInfobarMenu>
            <MyInfobarMenu>
              <MyInfobarLabel>Notes</MyInfobarLabel>
            </MyInfobarMenu>
            <MyInfobarMenu>
              <MyInfobarLabel>Benefits</MyInfobarLabel>
            </MyInfobarMenu>
            <MyInfobarMenu>
              <MyInfobarLabel>Training</MyInfobarLabel>
            </MyInfobarMenu>
            <MyInfobarMenu>
              <MyInfobarLabel>Assets</MyInfobarLabel>
            </MyInfobarMenu>
            <MyInfobarMenu>
              <MyInfobarLabel className='flex items-center gap-2'>
                <h3>More</h3>
                <ChevronDown className='h-4 w-4 text-slateBlue stroke-[5.5]' />
              </MyInfobarLabel>
            </MyInfobarMenu>
          </MyInfobar>
        </div>
      </header>
    </div>
  );
};
