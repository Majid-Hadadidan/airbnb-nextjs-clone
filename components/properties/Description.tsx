"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import Title from "./Title";

function Description({ description }: { description: string }) {
  const [isFullDescriptionShown, setIsFullDescriptionShown] = useState(false);
  const words = description.split(" ");
  const isLongDescription = words.length > 100;

  const toggleDescription = () => {
    setIsFullDescriptionShown(!isFullDescriptionShown);
  };
  const desplayedDescription =
    isLongDescription && !isFullDescriptionShown
      ? words.slice(0, 100).join(" ") + "..."
      : description;

  return (
    <article>
      <Title text="Description" />
      <p className="text-muted-foreground font-medium leading-loose">
        {desplayedDescription}
      </p>
      {isLongDescription && (
        <Button variant="link" onClick={toggleDescription} className="pl-0">
          {isFullDescriptionShown ? "Show less" : "Show more"}
        </Button>
      )}
    </article>
  );
}
export default Description;
