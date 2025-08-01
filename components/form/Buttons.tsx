"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

type SubmitButtonProps = {
  className?: string;
  text?: string;
};
export function SubmitButton({
  className = "",
  text = "submit",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`capitalize ${className}`}
      size="lg"
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> Please wait....
        </>
      ) : (
        text
      )}
    </Button>
  );
}
