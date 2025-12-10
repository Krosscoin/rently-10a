import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils'; // Assuming cn utility is available

const spinnerVariants = cva(
  'animate-spin rounded-full border-solid border-t-transparent ease-linear',
  {
    variants: {
      size: {
        sm: 'h-4 w-4 border-2',
        md: 'h-8 w-8 border-4',
        lg: 'h-12 w-12 border-4',
      },
      variant: {
        default: 'border-primary',
        secondary: 'border-secondary',
        destructive: 'border-destructive',
        white: 'border-white',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ size, variant, className }) => {
  return <div className={cn(spinnerVariants({ size, variant, className }))} role="status" aria-label="Loading"></div>;
};
