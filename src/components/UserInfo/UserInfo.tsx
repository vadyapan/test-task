import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card } from '../ui/card';
import {
  CircleUserRound,
  Clock,
  Facebook,
  Globe,
  Hash,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Users,
} from 'lucide-react';

interface UserInfoProps {
  userName: string;
  avatarUrl: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({ userName, avatarUrl }) => {
  return (
    <>
      <div className='flex flex-col items-center laptop:hidden'>
        <div className='absolute z-10 mt-9'>
          <Avatar className='w-36 h-36'>
            <AvatarImage src={avatarUrl} alt={`Avatar ${userName}`} />
            <AvatarFallback>IMG</AvatarFallback>
          </Avatar>
        </div>
        <div className='relative top-40 flex flex-col gap-4 text-slateBlue'>
          <Card className='flex flex-col gap-4 p-6 w-60 rounded-2xl'>
            <div className='flex gap-2 items-center'>
              <Phone className='h-4 w-4' />
              <h3 className='text-sm font-medium'>07911 654321</h3>
            </div>
            <div className='flex gap-2 items-center'>
              <Mail className='h-4 w-4' />
              <h3 className='text-sm font-medium'>avd.yana@videorollnet</h3>
            </div>
            <div className='flex gap-3 items-center'>
              <Linkedin className='h-4 w-4' />
              <Facebook className='h-4 w-4' />
              <Twitter className='h-4 w-4' />
            </div>
          </Card>
          <Card className='flex flex-col p-6 w-60 text-sm font-medium rounded-2xl'>
            <h3 className='mb-4'>Hire Date</h3>
            <h3 className='mb-2'>Sep. 3,2020</h3>
            <h3>3y - 9m - 20d</h3>
          </Card>
          <Card className='flex flex-col gap-2 p-6 w-60 text-sm font-medium rounded-2xl'>
            <div className='flex gap-2 items-center'>
              <Hash className='h-4 w-4' />
              <h3 className='text-sm font-medium'>5</h3>
            </div>
            <div className='flex gap-2 items-center'>
              <Clock className='h-4 w-4' />
              <h3 className='text-sm font-medium'>Full-Time</h3>
            </div>
            <div className='flex gap-2 items-center'>
              <Users className='h-4 w-4' />
              <h3 className='text-sm font-medium'>Operations</h3>
            </div>
            <div className='flex gap-2 items-center'>
              <Globe className='h-4 w-4' />
              <h3 className='text-sm font-medium'>Europe</h3>
            </div>
            <div className='flex gap-2 items-center'>
              <MapPin className='h-4 w-4' />
              <h3 className='text-sm font-medium'>London, UK</h3>
            </div>
          </Card>
          <Card className='flex flex-col p-6 w-60 text-sm font-medium rounded-2xl'>
            <h3 className='mb-4'>Direct Reports</h3>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2 items-center'>
                <CircleUserRound className='h-4 w-4' />
                <h3 className='text-sm font-medium'>Shane</h3>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2 items-center'>
                <CircleUserRound className='h-4 w-4' />
                <h3 className='text-sm font-medium'>Nathan</h3>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2 items-center'>
                <CircleUserRound className='h-4 w-4' />
                <h3 className='text-sm font-medium'>Mitchell</h3>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2 items-center'>
                <CircleUserRound className='h-4 w-4' />
                <h3 className='text-sm font-medium'>Philip</h3>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2 items-center'>
                <Users className='h-4 w-4' />
                <h3 className='text-sm font-medium'>4 More...</h3>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
