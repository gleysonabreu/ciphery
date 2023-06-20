'use client';
import { GithubLogo, SunDim } from '@phosphor-icons/react';
import { Button } from './Button';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="flex flex-col md:flex-row w-full items-center justify-between gap-5 md:gap-0">
      <div className="flex flex-col gap-2 items-center md:items-start">
        <div className="flex gap-3">
          <Image src="/logo-symbol.svg" width={40} height={40} alt="Logo" />
          <h1 className="text-3xl lg:text-4xl font-extrabold text-zinc-800 dark:text-zinc-200">
            Ciphery
          </h1>
        </div>
        <p className="text-sm lg:text-xl dark:text-zinc-500 text-zinc-800 font-medium">
          Desbloqueie seu mundo com senhas seguras!
        </p>
      </div>

      <div className="flex gap-2">
        <Button variant="zinc">
          <SunDim size={22} />
        </Button>
        <Button variant="zinc" asChild>
          <Link href="/">
            <GithubLogo size={22} />
          </Link>
        </Button>
      </div>
    </header>
  );
}
