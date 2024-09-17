'use client';

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  CustomTable,
  CustomTableBody,
  CustomTableCell,
  CustomTableHead,
  CustomTableHeader,
  CustomTableRow,
} from '@/src/components/MyInfoHistory/CustomTable';

const data: Sick[] = [
  {
    id: 'm5gr84i9',
    date: new Date('2024-05-23'),
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    usedDays: null,
    earnedDays: 3.0,
    balance: 3.0,
  },
  {
    id: '3u1reuv4',
    date: new Date('2024-05-23'),
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    usedDays: -6,
    earnedDays: null,
    balance: 3.0,
  },
  {
    id: 'derv1ws0',
    date: new Date('2024-05-23'),
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    usedDays: null,
    earnedDays: 3.0,
    balance: 3.0,
  },
  {
    id: '5kma53ae',
    date: new Date('2024-05-23'),
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    usedDays: null,
    earnedDays: 3.0,
    balance: 3.0,
  },
  {
    id: 'bhqecj4p',
    date: new Date('2024-05-23'),
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    usedDays: -6,
    earnedDays: null,
    balance: 3.0,
  },
  {
    id: 'odlscj9p',
    date: new Date('2024-05-23'),
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    usedDays: null,
    earnedDays: 3.0,
    balance: 3.0,
  },
];

export type Sick = {
  id: string;
  date: Date;
  description: string;
  usedDays: number | null;
  earnedDays: number | null;
  balance: number;
};

export const columns: ColumnDef<Sick>[] = [
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      const date: Date = row.getValue('date');
      const formattedDate = `${String(date.getDate()).padStart(
        2,
        '0'
      )}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
      return <div>{formattedDate}</div>;
    },
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => <div>{row.getValue('description')}</div>,
  },
  {
    accessorKey: 'usedDays',
    header: 'Used Days (-)',
    cell: ({ row }) => <div>{row.getValue('usedDays')}</div>,
  },
  {
    accessorKey: 'earnedDays',
    header: 'Earned Days (+)',
    cell: ({ row }) => {
      const earnedDays: number = row.getValue('earnedDays');
      return <div>{earnedDays !== null ? earnedDays.toFixed(2) : ''}</div>;
    },
  },
  {
    accessorKey: 'balance',
    header: 'Balance',
    cell: ({ row }) => {
      const balance: number = row.getValue('balance');
      return <div>{balance.toFixed(2)}</div>;
    },
  },
];

export function MyInfoTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className='touch-scrollbar whitespace-nowrap overflow-x-scroll tablet:-mr-6'>
      <CustomTable>
        <CustomTableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <CustomTableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <CustomTableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </CustomTableHead>
                );
              })}
            </CustomTableRow>
          ))}
        </CustomTableHeader>
        <CustomTableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <CustomTableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <CustomTableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </CustomTableCell>
                ))}
              </CustomTableRow>
            ))
          ) : (
            <CustomTableRow>
              <CustomTableCell
                colSpan={columns.length}
                className='h-24 text-center'
              >
                No results.
              </CustomTableCell>
            </CustomTableRow>
          )}
        </CustomTableBody>
      </CustomTable>
    </div>
  );
}
