import { links } from "@/utils/link";
import UserIcon from "./UserIcon";
import { Button } from "../ui/button";
import Link from "next/link";
import { LuAlignLeft } from "react-icons/lu";

import {
  DropdownMenu,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import SignOutLink from "./SignOutLink";

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className=" cursor-pointer flex gap-4 max-w-[100px]"
        >
          <LuAlignLeft className="!w-6 !h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50" align="start" sideOffset={10}>
        {/* Sign Out */}
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        {/* Sign Out */}
         <SignedIn>
      {links.map((link) => {
        return (
          <DropdownMenuItem key={link.href}>
            <Link href={link.href} className='capitalize w-full'>
              {link.label}
            </Link>
          </DropdownMenuItem>
        );
      })}
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <SignOutLink />
      </DropdownMenuItem>
    </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;
