import {
  SendPasswordToEmailProps,
  SendToEmailForm,
} from '@/components/SendPasswordToEmail';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

type SendEmailData = SendPasswordToEmailProps & SendToEmailForm;

const postEmail = async (data: SendEmailData) => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/email`, {
    ...data,
    to: data.email,
  });
};

export function useEmailMutation() {
  const { isError, isSuccess, isLoading, mutate } = useMutation({
    mutationFn: async (data: SendEmailData) => postEmail(data),
  });

  return { isError, isSuccess, isLoading, mutate };
}
