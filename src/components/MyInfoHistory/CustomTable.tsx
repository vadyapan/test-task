import * as React from 'react';

import { cn } from '@/src/lib/utils';

const CustomTable = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className='relative w-full overflow-auto'>
    <table
      ref={ref}
      className={cn('w-full caption-bottom text-sm font-medium', className)}
      {...props}
    />
  </div>
));
CustomTable.displayName = 'CustomTable';

const CustomTableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn('bg-primary text-foreground', className)}
    {...props}
  />
));
CustomTableHeader.displayName = 'CustomTableHeader';

const CustomTableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      '[&_tr]:border-b-2 [&_tr]:border-primaryGray',
      '[&_tr:last-child]:border-b-2 [&_tr:last-child]:border-primaryGray',
      className
    )}
    {...props}
  />
));
CustomTableBody.displayName = 'CustomTableBody';

const CustomTableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
));
CustomTableFooter.displayName = 'CustomTableFooter';

const CustomTableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-primaryGray transition-colors hover:bg-[#e8eff7] data-[state=selected]:bg-muted',
      className
    )}
    {...props}
  />
));
CustomTableRow.displayName = 'CustomTableRow';

const CustomTableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-12 px-4 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
));
CustomTableHead.displayName = 'CustomTableHead';

const CustomTableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
));
CustomTableCell.displayName = 'CustomTableCell';

const CustomTableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-muted-foreground', className)}
    {...props}
  />
));
CustomTableCaption.displayName = 'CustomTableCaption';

export {
  CustomTable,
  CustomTableHeader,
  CustomTableBody,
  CustomTableFooter,
  CustomTableHead,
  CustomTableRow,
  CustomTableCell,
  CustomTableCaption,
};
