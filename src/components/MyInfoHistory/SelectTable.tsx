'use client';

import * as React from 'react';
import * as SelectTablePrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp, X } from 'lucide-react';

import { cn } from '@/src/lib/utils';

const SelectTable = SelectTablePrimitive.Root;

const SelectTableGroup = SelectTablePrimitive.Group;

const SelectTableValue = SelectTablePrimitive.Value;

const SelectTableTrigger = React.forwardRef<
  React.ElementRef<typeof SelectTablePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectTablePrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectTablePrimitive.Trigger
    ref={ref}
    className={cn(
      'flex h-8 w-full items-center justify-between rounded-lg border border-input bg-card pl-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      className
    )}
    {...props}
  >
    {children}
    <SelectTablePrimitive.Icon asChild>
      <div className='flex justify-center items-center w-6 h-[30px] rounded-r-lg bg-secondaryGray'>
        <ChevronDown className='h-4 w-4 text-slateBlue' />
      </div>
    </SelectTablePrimitive.Icon>
  </SelectTablePrimitive.Trigger>
));
SelectTableTrigger.displayName = SelectTablePrimitive.Trigger.displayName;

const SelectTableClosingTrigger = React.forwardRef<
  React.ElementRef<typeof SelectTablePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectTablePrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectTablePrimitive.Trigger
    ref={ref}
    className={cn(
      'flex h-8 w-full items-center justify-between rounded-lg border border-input bg-card pl-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      className
    )}
    {...props}
  >
    {children}
    <SelectTablePrimitive.Icon asChild>
      <div className='flex items-center gap-2'>
        <X className='h-4 w-4 text-slateBlue/50' />

        <div className='flex justify-center items-center w-6 h-[30px] rounded-r-lg bg-secondaryGray'>
          <ChevronDown className='h-4 w-4 text-slateBlue' />
        </div>
      </div>
    </SelectTablePrimitive.Icon>
  </SelectTablePrimitive.Trigger>
));
SelectTableClosingTrigger.displayName =
  SelectTablePrimitive.Trigger.displayName;

const SelectTableScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectTablePrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectTablePrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectTablePrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className
    )}
    {...props}
  >
    <ChevronUp className='h-4 w-4' />
  </SelectTablePrimitive.ScrollUpButton>
));
SelectTableScrollUpButton.displayName =
  SelectTablePrimitive.ScrollUpButton.displayName;

const SelectTableScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectTablePrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectTablePrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectTablePrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      'flex cursor-default items-center justify-center py-1',
      className
    )}
    {...props}
  >
    <ChevronDown className='h-4 w-4' />
  </SelectTablePrimitive.ScrollDownButton>
));
SelectTableScrollDownButton.displayName =
  SelectTablePrimitive.ScrollDownButton.displayName;

const SelectTableContent = React.forwardRef<
  React.ElementRef<typeof SelectTablePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectTablePrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectTablePrimitive.Portal>
    <SelectTablePrimitive.Content
      ref={ref}
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectTableScrollUpButton />
      <SelectTablePrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-SelectTable-trigger-height)] w-full min-w-[var(--radix-SelectTable-trigger-width)]'
        )}
      >
        {children}
      </SelectTablePrimitive.Viewport>
      <SelectTableScrollDownButton />
    </SelectTablePrimitive.Content>
  </SelectTablePrimitive.Portal>
));
SelectTableContent.displayName = SelectTablePrimitive.Content.displayName;

const SelectTableLabel = React.forwardRef<
  React.ElementRef<typeof SelectTablePrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectTablePrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectTablePrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
));
SelectTableLabel.displayName = SelectTablePrimitive.Label.displayName;

const SelectTableItem = React.forwardRef<
  React.ElementRef<typeof SelectTablePrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectTablePrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectTablePrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default SelectTable-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <SelectTablePrimitive.ItemIndicator>
        <Check className='h-4 w-4' />
      </SelectTablePrimitive.ItemIndicator>
    </span>

    <SelectTablePrimitive.ItemText>{children}</SelectTablePrimitive.ItemText>
  </SelectTablePrimitive.Item>
));
SelectTableItem.displayName = SelectTablePrimitive.Item.displayName;

const SelectTableSeparator = React.forwardRef<
  React.ElementRef<typeof SelectTablePrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectTablePrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectTablePrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
SelectTableSeparator.displayName = SelectTablePrimitive.Separator.displayName;

export {
  SelectTable,
  SelectTableGroup,
  SelectTableValue,
  SelectTableTrigger,
  SelectTableClosingTrigger,
  SelectTableContent,
  SelectTableLabel,
  SelectTableItem,
  SelectTableSeparator,
  SelectTableScrollUpButton,
  SelectTableScrollDownButton,
};
