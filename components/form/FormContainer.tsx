'use client'
import { actionFunction } from "@/utils/types";
import React, { useActionState, useEffect } from "react";
import { toast } from "sonner";

type FormContainerProps = {
  action: actionFunction;
  children: React.ReactNode;
};

const initialState = {
  message: "",
};
export default function FormContainer({
  action,
  children,
}: FormContainerProps) {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  return <form action={formAction}>{children}</form>;
}
