'use client';

import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { Button } from './Button';

type ModalProps = {
  isOpen: boolean;
  title: string;
  content: string;
  variant?: 'success';
};

export function Modal({
  isOpen,
  content,
  title,
  variant = 'success',
}: ModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    setOpen(true);
  }, [isOpen]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 dark:bg-zinc-900 dark:bg-opacity-75 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-2xl dark:bg-zinc-800 bg-zinc-100 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
                <div className="dark:bg-zinc-800 bg-zinc-1 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="flex flex-col items-center gap-2">
                    {variant === 'success' && (
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full dark:bg-green-200 bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <CheckIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 dark:text-zinc-100 text-zinc-900"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm dark:text-zinc-400 text-zinc-500">
                          {content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dark:bg-zinc-800 bg-zinc-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <Button isFull onClick={() => setOpen(false)}>
                    Beleza! :D
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
