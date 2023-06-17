'use client';
import { Button } from "@/components/Button";
import { ButtonRounded } from "@/components/ButtonRounded";
import { Input } from "@/components/Input";
import { CopySimple } from "@phosphor-icons/react";
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useState } from "react";

const passwordOpts = [{ name: 'ABC', value: 'uppercase'}, { name: 'abc', value: 'lowercase'}, { name: '123', value: 'numbers'}, { name: '!@#', value: 'symbols'}];

export default function Home() {
  const [passwordOptions, setPasswordOptions] = useState<string[]>([]);

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
              <ButtonRounded checked>MD5</ButtonRounded>
              <ButtonRounded>SHA-1</ButtonRounded>
              <ButtonRounded>BCRYPT</ButtonRounded>
            </div>
          </div>
        </div>
        <div className="w-full flex rounded-xl p-8 gap-6 flex-col h-full items-start justify-center dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
          <div className="flex gap-3 flex-col">
            <h1 className="text-zinc-700 dark:text-zinc-400 font-semibold">Características</h1>
            <ToggleGroup.Root
                  type="multiple"
                  className="grid grid-cols-4 gap-2"
                  value={passwordOptions}
                  onValueChange={setPasswordOptions}
                >
                  {passwordOpts.map((opt, i) => (
                    <ToggleGroup.Item
                    key={i}
                    value={opt.value}
                    title={opt.name}
                    asChild
                  >
                    <ButtonRounded checked={passwordOptions.includes(opt.value)}>
                      {opt.name}
                    </ButtonRounded>
                  </ToggleGroup.Item>
                  ))}
                </ToggleGroup.Root>
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
