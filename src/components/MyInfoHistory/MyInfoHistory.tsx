import { History } from 'lucide-react';
import {
  SelectTable,
  SelectTableTrigger,
  SelectTableValue,
  SelectTableContent,
  SelectTableItem,
  SelectTableClosingTrigger,
} from './SelectTable';
import { MyInfoTable } from './MyInfoTable';

export const MyInfoHistory: React.FC = () => {
  return (
    <div className='flex flex-col gap-4 mb-24'>
      <header className='flex items-center gap-2'>
        <History className='h-4 w-4 text-slateBlue' />
        <h3 className='font-medium text-darkBlue'>History</h3>
      </header>

      <div className='flex gap-4 mobile:flex-col mobile:gap-4'>
        <SelectTable>
          <SelectTableClosingTrigger className='w-44 mobile:w-full'>
            <SelectTableValue placeholder='Sick' />
          </SelectTableClosingTrigger>
          <SelectTableContent>
            <SelectTableItem value='1'>1</SelectTableItem>
            <SelectTableItem value='2'>2</SelectTableItem>
            <SelectTableItem value='3'>3</SelectTableItem>
          </SelectTableContent>
        </SelectTable>

        <div className='flex grow justify-between'>
          <SelectTable>
            <SelectTableClosingTrigger className='w-24'>
              <SelectTableValue placeholder='All' />
            </SelectTableClosingTrigger>
            <SelectTableContent>
              <SelectTableItem value='1'>1</SelectTableItem>
              <SelectTableItem value='2'>2</SelectTableItem>
              <SelectTableItem value='3'>3</SelectTableItem>
            </SelectTableContent>
          </SelectTable>
          <SelectTable>
            <SelectTableTrigger className='w-44'>
              <SelectTableValue placeholder='Balance History' />
            </SelectTableTrigger>
            <SelectTableContent>
              <SelectTableItem value='1'>1</SelectTableItem>
              <SelectTableItem value='2'>2</SelectTableItem>
              <SelectTableItem value='3'>3</SelectTableItem>
            </SelectTableContent>
          </SelectTable>
        </div>
      </div>

      <MyInfoTable />
    </div>
  );
};
