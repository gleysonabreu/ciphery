'use client';
import { Button } from "@/components/Button";
import { CopySimple, GithubLogo, SunDim } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex p-5 lg:p-0 items-center justify-center min-h-screen flex-col lg:mx-40 lg:my-auto gap-12">
      <header className="flex flex-col md:flex-row w-full items-center justify-between gap-5 md:gap-0">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="flex gap-3">
            <Image src='/logo-symbol.svg' width={40} height={40} alt="Logo" />
            <h1 className="text-3xl lg:text-4xl font-extrabold text-zinc-800 dark:text-zinc-200">Ciphery</h1>
          </div>
          <p className="text-sm lg:text-xl dark:text-zinc-500 text-zinc-800 font-medium">Desbloqueie seu mundo com senhas seguras!</p>
        </div>

        <div className="flex gap-2">
          <Button variant="zinc">
            <SunDim size={22} />
          </Button>
          <Button variant="zinc" asChild>
            <Link href='/'>
              <GithubLogo size={22} />
            </Link>
          </Button>
        </div>
      </header>

      <div className="flex flex-col lg:grid lg:grid-cols-home w-full gap-10 items-start">
        <div className="flex flex-col gap-10 p-8 w-full dark:bg-zinc-900  border-zinc-200 border dark:border-zinc-800 rounded-xl">
          <div className="flex flex-col items-start gap-3 w-full">
            <h1 className="text-zinc-700 dark:text-zinc-400 font-semibold">Senha padrão</h1>
            <div className="flex flex-col md:flex-row items-center gap-2 w-full">
              <input className="h-10 w-full p-3 pr-0 outline-none bg-zinc-200 dark:bg-zinc-800 rounded text-zinc-700 dark:text-zinc-400" placeholder="Gerar senha?" />
              <div className="flex items-center gap-3">
                <Button variant="zinc">
                  <CopySimple size={22} className="text-zinc-700" />
                </Button>
                <Button>
                  Gerar
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-zinc-700 dark:text-zinc-400 font-semibold">Hash Gerado</h1>
            <div className="flex flex-col md:flex-row items-center gap-2 w-full">
              <input className="h-10 w-full p-3 pr-0 outline-none bg-zinc-200 dark:bg-zinc-800 rounded text-zinc-700 dark:text-zinc-400" value='32tqk&fa4@4z%1&L%dtdGxTQD4' disabled />
              <Button>
                <CopySimple size={22} />
                Copiar
              </Button>
            </div>

            <div className="flex justify-center md:justify-start items-center mt-5 gap-2 w-full">
              <button className="px-4 py-[2px] rounded-2xl border border-rose-400 dark:bg-rose-400/10 bg-zinc-100 text-rose-400 text-xs">MD5</button>
              <button className="px-4 py-[2px] rounded-2xl border hover:border-rose-400 hover:bg-rose-400/10 hover:text-rose-400 dark:border-zinc-600 border-zinc-400 dark:bg-zinc-900 bg-zinc-100 text-zinc-600 text-xs transition-all">SHA-1</button>
              <button className="px-4 py-[2px] rounded-2xl border hover:border-rose-400 hover:bg-rose-400/10 hover:text-rose-400 dark:border-zinc-600 border-zinc-400 dark:bg-zinc-900 bg-zinc-100 text-zinc-600 text-xs transition-all">BCRYPT</button>
            </div>
          </div>
        </div>
        <div className="w-full flex rounded-xl p-8 gap-6 flex-col h-full items-start justify-center dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
          <div className="flex gap-3 flex-col">
            <h1 className="text-zinc-700 dark:text-zinc-400 font-semibold">Características</h1>
            <div className="flex items-center gap-2">
              <button className="px-4 py-[2px] rounded-2xl border border-rose-400 dark:bg-rose-400/10 bg-zinc-100 text-rose-400 text-xs">ABC</button>
              <button className="px-4 py-[2px] rounded-2xl border hover:border-rose-400 hover:bg-rose-400/10 hover:text-rose-400 dark:border-zinc-600 border-zinc-400 dark:bg-zinc-900 bg-zinc-100 text-zinc-600 text-xs transition-all">abc</button>
              <button className="px-4 py-[2px] rounded-2xl border hover:border-rose-400 hover:bg-rose-400/10 hover:text-rose-400 dark:border-zinc-600 border-zinc-400 dark:bg-zinc-900 bg-zinc-100 text-zinc-600 text-xs transition-all">123</button>
              <button className="px-4 py-[2px] rounded-2xl border hover:border-rose-400 hover:bg-rose-400/10 hover:text-rose-400 dark:border-zinc-600 border-zinc-400 dark:bg-zinc-900 bg-zinc-100 text-zinc-600 text-xs transition-all">!#@</button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-zinc-700 dark:text-zinc-400 font-semibold">Tamanho</h1>
            <input className="h-10 p-3 outline-none bg-zinc-200 dark:bg-zinc-800 rounded text-zinc-700 dark:text-zinc-400" type="number" min="1" max={100} placeholder="Min 1" />
          </div>
        </div>
      </div>
    </main>
  )
}
