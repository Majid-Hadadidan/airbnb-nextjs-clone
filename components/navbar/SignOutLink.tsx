"use client";

import { useClerk } from "@clerk/nextjs";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

function SignOutLink() {
  const { signOut } = useClerk();

  const handleLogout = async () => {
    await signOut();
    toast("You have been signed out.");
    window.location.href = "/";
  };

  return (
    <Button variant='default' size='sm' onClick={handleLogout} className="w-full cursor-pointer">
      Logout
    </Button>
  );
}

export default SignOutLink;
