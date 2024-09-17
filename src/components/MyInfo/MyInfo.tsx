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
import {
  ChevronDown,
  Clock,
  Cross,
  EllipsisVertical,
  FileClock,
  MountainSnow,
  PiggyBank,
  Settings,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import {
  MyInfoCard,
  MyInfoCardContent,
  MyInfoCardTitle,
} from '../MyInfoCard/MyInfoCard';
import { MyInfoHistory } from '../MyInfoHistory/MyInfoHistory';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface MyInfoProps {
  userName: string;
  avatarUrl: string;
}

export const MyInfo: React.FC<MyInfoProps> = ({ userName, avatarUrl }) => {
  return (
    <div className='grid grid-cols-1 mx-auto mt-16 mb-72 laptop:mt-6 tablet:mt-0'>
      <header className='flex justify-between items-center mb-11 laptop:mb-10 tablet:mb-6 tablet:px-6'>
        <div className='flex laptop:items-center laptop:gap-6'>
          <div className='hidden laptop:block'>
            <Avatar className='w-20 h-20 mobile:h-[60px] mobile:w-[60px]'>
              <AvatarImage src={avatarUrl} alt={`Avatar ${userName}`} />
              <AvatarFallback>IMG</AvatarFallback>
            </Avatar>
          </div>
          <div className='max-h-52'>
            <h1 className='text-3xl font-semibold text-wrap mobile:text-xl'>
              {userName}
            </h1>
          </div>
        </div>
        <div className='flex gap-4 laptop:hidden'>
          <Select>
            <SelectTrigger className='w-40 bg-primary'>
              <SelectValue placeholder='Request a Change' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='1'>1</SelectItem>
              <SelectItem value='2'>2</SelectItem>
              <SelectItem value='3'>3</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className='w-14 bg-primary'>
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
        <div className='hidden laptop:block'>
          <EllipsisVertical className='text-slateBlue' />
        </div>
      </header>

      <div className='touch-scrollbar flex whitespace-nowrap overflow-x-scroll'>
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

      <div className='flex flex-col gap-6 bg-card pt-10 px-4 rounded-b-2xl tablet:mt-0 tablet:px-6'>
        <header>
          <div className='flex justify-between mb-4 tablet:justify-end'>
            <div className='flex items-center gap-3 tablet:hidden'>
              <FileClock className='h-4 w-4 text-slateBlue' />
              <h3 className='text-xl font-medium text-darkBlue'>Time Off</h3>
            </div>
            <div className='flex items-end gap-7 tablet:flex-col tablet:gap-2'>
              <div className='flex font-medium'>
                <h3>Accrual Level Start Date</h3>&nbsp;
                <span className='cursor-pointer text-linkBlue'>03/09-2020</span>
              </div>
              <Button
                variant='outline'
                className='border-foreground rounded-lg bg-card'
              >
                Add Time Off Policy
              </Button>
            </div>
          </div>
          <Separator />
        </header>

        <div className='mb-2'>
          <div className='flex justify-center gap-12 touch-scrollbar whitespace-nowrap overflow-x-scroll tablet:justify-start -mr-6 pr-6'>
            <div className='flex flex-col items-center gap-2'>
              <MyInfoCard>
                <MyInfoCardTitle>Sick</MyInfoCardTitle>
                <MyInfoCardContent>
                  <div className='flex items-center gap-2.5 text-slateBlue'>
                    <Cross className='h-7 w-7' />
                    <h2 className='text-3xl font-semibold'>3</h2>
                  </div>
                  <h3 className='font-semibold'>Days Available</h3>
                  <h3 className='text-primaryGray font-semibold'>
                    1 day scheduled
                  </h3>
                </MyInfoCardContent>
              </MyInfoCard>
              <footer>
                <h3 className='font-medium text-primaryGray'>Sick Full-Time</h3>
              </footer>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <MyInfoCard>
                <MyInfoCardTitle>Annual Leave</MyInfoCardTitle>
                <MyInfoCardContent>
                  <div className='flex items-center gap-2.5 text-slateBlue'>
                    <MountainSnow className='h-7 w-7' />
                    <h2 className='text-3xl font-semibold'>10.3</h2>
                  </div>
                  <h3 className='font-semibold'>Days Available</h3>
                </MyInfoCardContent>
              </MyInfoCard>
              <footer>
                <h3 className='font-medium text-primaryGray'>
                  Holiday Full-Time
                </h3>
              </footer>
            </div>
            <div className='flex flex-col items-center gap-2'>
              <MyInfoCard>
                <MyInfoCardTitle>Comp/in Lieu Time</MyInfoCardTitle>
                <MyInfoCardContent>
                  <div className='flex items-center gap-2.5 text-slateBlue'>
                    <FileClock className='h-7 w-7' />
                    <h2 className='text-3xl font-semibold'>0</h2>
                  </div>
                  <h3 className='font-semibold'>Human Used(YTD)</h3>
                </MyInfoCardContent>
              </MyInfoCard>
              <footer>
                <h3 className='font-medium text-primaryGray'>
                  Comp/in Lieu Time Flexible Policy
                </h3>
              </footer>
            </div>
          </div>
        </div>

        <div>
          <div className='flex items-center gap-2 mb-4'>
            <Clock className='h-4 w-4 text-slateBlue' />
            <h3 className='font-medium text-darkBlue'>Upcoming Time Off</h3>
          </div>
          <Separator />
        </div>

        <div>
          <div className='flex items-center gap-3 mb-4'>
            <Cross className='h-7 w-7 text-slateBlue' />
            <div>
              <h3 className='font-medium'>Jan 27</h3>
              <ul className='font-medium custom-marker'>
                <li>1 day of Sick</li>
              </ul>
            </div>
          </div>
          <Separator />
        </div>

        <div>
          <div className='flex items-center gap-3 mb-4'>
            <PiggyBank className='h-7 w-7 text-slateBlue' />
            <div className='font-medium'>
              <h3>Jul 4</h3>
              <h3>Independence Day</h3>
            </div>
          </div>
          <Separator />
        </div>

        <MyInfoHistory />
      </div>
    </div>
  );
};
