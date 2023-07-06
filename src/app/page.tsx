'use client';
import { Button } from '@/components/Button';
import { ButtonRounded } from '@/components/ButtonRounded';
import { Input } from '@/components/Input';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import passwordPassword from 'generate-password';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useCallback, useEffect, useState } from 'react';
import crypto from 'crypto';
import bcryptjs from 'bcryptjs';
import { CopyToClipboard } from '@/components/CopyToClipboard';
import { SendPasswordToEmail } from '@/components/SendPasswordToEmail';

const passwordOpts = [
  { name: 'ABC', value: 'uppercase' },
  { name: 'abc', value: 'lowercase' },
  { name: '123', value: 'numbers' },
  { name: '!@#', value: 'symbols' },
];
const passwordEncryptedOpts = ['MD5', 'SHA-1', 'BCRYPT'];

type GeneratePasswordProps = {
  passwordOptions: string[];
  length: number;
};

const schema = z.object({
  passwordOptions: z
    .array(z.string(), { required_error: 'Selecione pelo menos uma opção' })
    .nonempty({ message: 'Selecione pelo menos uma opção' }),
  length: z.coerce
    .number({ required_error: 'Você precisa digitar um tamanho.' })
    .min(10, { message: 'O tamanho mínimo é 10' })
    .max(100, { message: 'O tamanho máximo é 100' }),
});

export default function Home() {
  const [password, setPassword] = useState<string>('');

  const [passwordEncrypted, setPasswordEncrypted] = useState<string>('');
  const [typePasswordEncrypted, setTypePasswordEncrypted] =
    useState<string>('MD5');

  const handleEncryptPassword = useCallback(() => {
    let encrypted = '';

    switch (typePasswordEncrypted) {
      case 'MD5':
        encrypted = crypto.createHash('md5').update(password).digest('hex');
        break;
      case 'SHA-1':
        encrypted = crypto.createHash('sha1').update(password).digest('hex');
        break;

      default:
        encrypted = bcryptjs.hashSync(password, 10);
    }

    setPasswordEncrypted(encrypted);
  }, [password, typePasswordEncrypted]);

  useEffect(() => {
    handleEncryptPassword();
  }, [handleEncryptPassword]);

  const generatePasswordForm = useForm<GeneratePasswordProps>({
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = generatePasswordForm;

  const handleGeneratePassword: SubmitHandler<GeneratePasswordProps> = async (
    data,
  ) => {
    const password = passwordPassword.generate({
      length: data.length,
      symbols: data.passwordOptions.includes('symbols'),
      numbers: data.passwordOptions.includes('numbers'),
      uppercase: data.passwordOptions.includes('uppercase'),
      lowercase: data.passwordOptions.includes('lowercase'),
    });

    setPassword(password);
  };

  return (
    <main className="flex flex-col gap-4 w-full">
      <FormProvider {...generatePasswordForm}>
        <form onSubmit={handleSubmit(handleGeneratePassword)}>
          <div className="flex flex-col lg:grid lg:grid-cols-home w-full gap-10 items-start">
            <div className="flex flex-col gap-10 p-8 w-full dark:bg-zinc-900  border-zinc-200 border dark:border-zinc-800 rounded-xl">
              <div className="flex flex-col items-start gap-3 w-full">
                <h1 className="text-zinc-700 dark:text-zinc-400 font-semibold">
                  Senha padrão
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-2 w-full">
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    type="text"
                    placeholder="Gerar senha?"
                  />
                  <div className="flex items-center gap-3">
                    <CopyToClipboard text={password} />
                    <Button type="submit">Gerar</Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <h1 className="text-zinc-700 dark:text-zinc-400 font-semibold">
                  Hash Gerado
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-2 w-full">
                  <Input
                    name="password_crypt"
                    type="text"
                    value={passwordEncrypted}
                    disabled
                  />
                  <CopyToClipboard text={passwordEncrypted}>
                    Copiar
                  </CopyToClipboard>
                </div>

                <div className="flex justify-center md:justify-start items-center mt-5 gap-2 w-full">
                  <ToggleGroup.Root
                    type="single"
                    className="grid grid-cols-3 gap-2"
                    value={typePasswordEncrypted}
                    onValueChange={setTypePasswordEncrypted}
                  >
                    {passwordEncryptedOpts.map((opt, i) => (
                      <ButtonRounded
                        key={i}
                        checked={typePasswordEncrypted === opt}
                        asChild
                      >
                        <ToggleGroup.Item value={opt} title={opt}>
                          {opt}
                        </ToggleGroup.Item>
                      </ButtonRounded>
                    ))}
                  </ToggleGroup.Root>
                </div>
              </div>
            </div>
            <div className="w-full flex rounded-xl p-8 gap-6 flex-col h-full items-start justify-center dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <div className="flex gap-3 flex-col">
                <h1 className="text-zinc-700 dark:text-zinc-400 font-semibold">
                  Características
                </h1>
                {errors.passwordOptions && (
                  <span className="text-red-500 text-sm">
                    {errors.passwordOptions.message}
                  </span>
                )}
                <Controller
                  control={control}
                  name="passwordOptions"
                  render={({ field }) => (
                    <ToggleGroup.Root
                      {...field}
                      type="multiple"
                      className="grid grid-cols-4 gap-2"
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      {passwordOpts.map((opt, i) => (
                        <ButtonRounded
                          key={i}
                          checked={field.value?.includes(opt.value)}
                          asChild
                        >
                          <ToggleGroup.Item value={opt.value} title={opt.name}>
                            {opt.name}
                          </ToggleGroup.Item>
                        </ButtonRounded>
                      ))}
                    </ToggleGroup.Root>
                  )}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-zinc-700 dark:text-zinc-400 font-semibold">
                  Tamanho
                </h1>
                {errors.length && (
                  <span className="text-red-500 text-sm">
                    {errors.length.message}
                  </span>
                )}
                <Input name="length" type="number" placeholder="Min 10" />
              </div>
            </div>
          </div>
        </form>
      </FormProvider>

      <SendPasswordToEmail
        password={password}
        passwordEncrypted={passwordEncrypted}
      />
    </main>
  );
}
