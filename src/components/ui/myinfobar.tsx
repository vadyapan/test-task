'use client';

import * as React from 'react';
import * as MyInfobarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';

import { cn } from '@/src/lib/utils';

const MyInfobarMenu = MyInfobarPrimitive.Menu;

const MyInfobarGroup = MyInfobarPrimitive.Group;

const MyInfobarPortal = MyInfobarPrimitive.Portal;

const MyInfobarSub = MyInfobarPrimitive.Sub;

const MyInfobarRadioGroup = MyInfobarPrimitive.RadioGroup;

const MyInfobar = React.forwardRef<
  React.ElementRef<typeof MyInfobarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MyInfobarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MyInfobarPrimitive.Root
    ref={ref}
    className={cn(
      'flex h-12 gap-3 items-center justify-around bg-primary',
      className
    )}
    {...props}
  />
));
MyInfobar.displayName = MyInfobarPrimitive.Root.displayName;

const MyInfobarTrigger = React.forwardRef<
  React.ElementRef<typeof MyInfobarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MyInfobarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MyInfobarPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      className
    )}
    {...props}
  />
));
MyInfobarTrigger.displayName = MyInfobarPrimitive.Trigger.displayName;

const MyInfobarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MyInfobarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MyInfobarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MyInfobarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className='ml-auto h-4 w-4' />
  </MyInfobarPrimitive.SubTrigger>
));
MyInfobarSubTrigger.displayName = MyInfobarPrimitive.SubTrigger.displayName;

const MyInfobarSubContent = React.forwardRef<
  React.ElementRef<typeof MyInfobarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MyInfobarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MyInfobarPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
MyInfobarSubContent.displayName = MyInfobarPrimitive.SubContent.displayName;

const MyInfobarContent = React.forwardRef<
  React.ElementRef<typeof MyInfobarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MyInfobarPrimitive.Content>
>(
  (
    { className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MyInfobarPrimitive.Portal>
      <MyInfobarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </MyInfobarPrimitive.Portal>
  )
);
MyInfobarContent.displayName = MyInfobarPrimitive.Content.displayName;

const MyInfobarItem = React.forwardRef<
  React.ElementRef<typeof MyInfobarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MyInfobarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MyInfobarPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
MyInfobarItem.displayName = MyInfobarPrimitive.Item.displayName;

const MyInfobarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MyInfobarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MyInfobarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MyInfobarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <MyInfobarPrimitive.ItemIndicator>
        <Check className='h-4 w-4' />
      </MyInfobarPrimitive.ItemIndicator>
    </span>
    {children}
  </MyInfobarPrimitive.CheckboxItem>
));
MyInfobarCheckboxItem.displayName = MyInfobarPrimitive.CheckboxItem.displayName;

const MyInfobarRadioItem = React.forwardRef<
  React.ElementRef<typeof MyInfobarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MyInfobarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MyInfobarPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <MyInfobarPrimitive.ItemIndicator>
        <Circle className='h-2 w-2 fill-current' />
      </MyInfobarPrimitive.ItemIndicator>
    </span>
    {children}
  </MyInfobarPrimitive.RadioItem>
));
MyInfobarRadioItem.displayName = MyInfobarPrimitive.RadioItem.displayName;

const MyInfobarLabel = React.forwardRef<
  React.ElementRef<typeof MyInfobarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MyInfobarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MyInfobarPrimitive.Label
    ref={ref}
    className={cn(
      'p-4 text-sm font-medium rounded-t-2xl',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));
MyInfobarLabel.displayName = MyInfobarPrimitive.Label.displayName;

const MyInfobarSeparator = React.forwardRef<
  React.ElementRef<typeof MyInfobarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MyInfobarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MyInfobarPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
MyInfobarSeparator.displayName = MyInfobarPrimitive.Separator.displayName;

const MyInfobarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground',
        className
      )}
      {...props}
    />
  );
};
MyInfobarShortcut.displayname = 'MyInfobarShortcut';

export {
  MyInfobar,
  MyInfobarMenu,
  MyInfobarTrigger,
  MyInfobarContent,
  MyInfobarItem,
  MyInfobarSeparator,
  MyInfobarLabel,
  MyInfobarCheckboxItem,
  MyInfobarRadioGroup,
  MyInfobarRadioItem,
  MyInfobarPortal,
  MyInfobarSubContent,
  MyInfobarSubTrigger,
  MyInfobarGroup,
  MyInfobarSub,
  MyInfobarShortcut,
};
