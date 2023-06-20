'use client';
import { Check, CopySimple } from "@phosphor-icons/react";
import { ReactNode, useEffect, useState } from "react";
import { Button } from "./Button";

type CopyToClipboardProps = {
  children?: ReactNode;
  text: string;
  asChild?: boolean;
}

export function CopyToClipboard(props: CopyToClipboardProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    const timeCopied = setTimeout(() => setIsCopied(false), 5000);

    return () => clearTimeout(timeCopied);
  }, [isCopied]);

  function copyTextToClipboard(text: string) {
    setIsCopied(true);
    navigator.clipboard.writeText(text);
  }

  return (
    <Button variant='zinc' type="button" onClick={() => copyTextToClipboard(props.text)}>
      {isCopied ? <Check size={22} className="text-zinc-700" /> : <CopySimple size={22} className="text-zinc-700" />}
      {props.children}
    </Button>
  );
}
