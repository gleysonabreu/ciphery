import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

export function Input(props: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <input
      {...register(props.name)}
      {...props}
      className="h-10 w-full p-3 pr-0 outline-none bg-zinc-200 dark:bg-zinc-800 rounded text-zinc-700 dark:text-zinc-400"
    />
  );
}
