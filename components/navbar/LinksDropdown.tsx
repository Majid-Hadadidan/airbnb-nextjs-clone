import { links } from "@/utils/link";
import UserIcon from "./UserIcon";
import { Button } from "../ui/button";
import Link from "next/link";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

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
      <DropdownMenuContent className="w-52" align="start" sideOffset={10}>
        {links.map((link) => {
          return (
            <DropdownMenuItem asChild key={link.href}>
              <Link href={link.href} className="capitalize w-full">
                {link.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;
