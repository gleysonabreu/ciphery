import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export function Input({ ...props }: InputProps) {
  return <input {...props} className="h-10 w-full p-3 pr-0 outline-none bg-zinc-200 dark:bg-zinc-800 rounded text-zinc-700 dark:text-zinc-400" />
}
