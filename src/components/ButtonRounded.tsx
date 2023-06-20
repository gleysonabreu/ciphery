import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

type ButtonRoundedProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  checked?: boolean;
  asChild?: boolean;
};

export function ButtonRounded({
  children,
  checked,
  asChild,
  ...props
}: ButtonRoundedProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      {...props}
      className={clsx(
        'px-4 py-[2px] rounded-2xl border text-xs transition-all',
        {
          'border-rose-400 dark:bg-rose-400/10 bg-zinc-100 text-rose-400':
            checked,
          'hover:border-rose-400 hover:bg-rose-400/10 hover:text-rose-400 dark:border-zinc-600 border-zinc-400 dark:bg-zinc-900 bg-zinc-100 text-zinc-600 ':
            !checked,
        },
      )}
    >
      {children}
    </Comp>
  );
}
