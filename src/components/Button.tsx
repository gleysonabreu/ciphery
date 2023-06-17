import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot';


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'rose' | 'zinc';
  size?: 'sm' | 'md' | 'lg';
  isFull?: boolean;
  asChild?: boolean;
}

export function Button({ children, variant = 'rose', size = 'md', isFull, asChild,...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
    className={clsx("flex items-center gap-2 rounded font-normal transition-colors", {
      'bg-rose-500 text-zinc-50 hover:bg-rose-600': variant === 'rose',
      'bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-500 hover:dark:bg-zinc-800/80 hover:bg-zinc-200/80': variant === 'zinc',
      'h-8 px-4 text-xs': size === 'sm',
      'h-10 px-6 text-sm': size === 'md',
      'h-12 px-8 text-sm': size === 'lg',
      'w-full': isFull,
    })}
    {...props}
    >
      {children}
    </Comp>
  );
}
