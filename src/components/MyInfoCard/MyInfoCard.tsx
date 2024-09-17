import * as React from 'react';

import { cn } from '@/src/lib/utils';

const MyInfoCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col justify-center items-center rounded-lg border-none bg-background text-foreground w-[264px] h-[138px]',
      className
    )}
    {...props}
  />
));
MyInfoCard.displayName = 'MyInfoCard';

const MyInfoCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
MyInfoCardHeader.displayName = 'MyInfoCardHeader';

const MyInfoCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('text-xl font-semibold', className)} {...props} />
));
MyInfoCardTitle.displayName = 'MyInfoCardTitle';

const MyInfoCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
MyInfoCardDescription.displayName = 'MyInfoCardDescription';

const MyInfoCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-1 items-center', className)}
    {...props}
  />
));
MyInfoCardContent.displayName = 'MyInfoCardContent';

const MyInfoCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
));
MyInfoCardFooter.displayName = 'MyInfoCardFooter';

export {
  MyInfoCard,
  MyInfoCardHeader,
  MyInfoCardFooter,
  MyInfoCardTitle,
  MyInfoCardDescription,
  MyInfoCardContent,
};
