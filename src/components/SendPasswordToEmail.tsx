import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Input } from './Input';
import { Button } from './Button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEmailMutation } from '@/hooks/useEmailMutation';
import { Modal } from './Modal';

export type SendToEmailForm = {
  email: string;
};

const schema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
});

export type SendPasswordToEmailProps = {
  password: string;
  passwordEncrypted: string;
};

export function SendPasswordToEmail({
  password,
  passwordEncrypted,
}: SendPasswordToEmailProps) {
  const { mutate, isSuccess, isLoading } = useEmailMutation();

  const sendEmailForm = useForm<SendToEmailForm>({
    resolver: zodResolver(schema),
  });

  const {
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = sendEmailForm;

  const handleSendToEmail: SubmitHandler<SendToEmailForm> = async (data) => {
    if (!password || !passwordEncrypted) {
      setError('email', { message: 'Você precisa gerar uma senha' });
      return;
    }

    mutate({
      email: data.email,
      password,
      passwordEncrypted,
    });

    reset();
  };

  return (
    <FormProvider {...sendEmailForm}>
      <Modal
        title="E-mail enviado com sucesso!"
        content="Sua senha gerada foi enviada para o seu e-mail, por favor verifique sua caixa de entrada ou spam."
        isOpen={isSuccess}
      />
      <div className="flex flex-col gap-10 p-8 w-full dark:bg-zinc-900  border-zinc-200 border dark:border-zinc-800 rounded-xl">
        <form onSubmit={handleSubmit(handleSendToEmail)}>
          <div className="flex flex-col items-start gap-3 w-full">
            <h1 className="text-zinc-700 dark:text-zinc-400 font-semibold">
              Enviar senha para o seu email?
            </h1>
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
            <div className="flex flex-col md:flex-row items-center gap-2 w-full">
              <Input name="email" type="text" placeholder="Email" />
              <div className="flex items-center gap-3">
                <Button type="submit" disabled={isLoading}>
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
