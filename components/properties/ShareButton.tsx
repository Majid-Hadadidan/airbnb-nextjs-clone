"use client";

import { LuShare2 } from "react-icons/lu";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailIcon,
  EmailShareButton,
} from "react-share";
function ShareButton({
  propertyId,
  name,
}: {
  propertyId: string;
  name: string;
}) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/proerties/${propertyId}`;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="outline">
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="flex gap-x-4 items-center justify-center w-full"
        side="top"
        align="end"
        sideOffset={10}
      >
        <TwitterShareButton url={shareLink} title={name}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareLink} title={name}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <EmailShareButton url={shareLink} subject={name}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  );
}
export default ShareButton;
