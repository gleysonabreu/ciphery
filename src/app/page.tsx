'use client';
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { CopySimple } from "@phosphor-icons/react";

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex flex-col lg:grid lg:grid-cols-home w-full gap-10 items-start">
        <div className="flex flex-col gap-10 p-8 w-full dark:bg-zinc-900  border-zinc-200 border dark:border-zinc-800 rounded-xl">
          <div className="flex flex-col items-start gap-3 w-full">
            <h1 className="text-zinc-700 dark:text-zinc-400 font-semibold">Senha padrão</h1>
            <div className="flex flex-col md:flex-row items-center gap-2 w-full">
              <Input type="text" placeholder="Gerar senha?" />
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
              <Input type="text" value='32tqk&fa4@4z%1&L%dtdGxTQD4' disabled />
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
            <Input type="number" min="1" max={100} placeholder="Min 1" />
          </div>
        </div>
      </div>
    </main>
  )
}
