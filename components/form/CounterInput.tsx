"use client";

import { useState } from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { LuMinus, LuPlus } from "react-icons/lu";
import { Button } from "../ui/button";

function CounterInput({
  detail,
  defaultValue,
}: {
  detail: string;
  defaultValue?: number;
}) {
  const [count, setCount] = useState(defaultValue || 0);

  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => setCount((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <Card className="mb-4">
      <input type="hidden" name={detail} value={count} />
      <CardHeader className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        {/* Only this text box is aligned: mobile center, desktop left*/}
        <div className="text-center sm:text-left">
          <h2 className="font-medium capitalize">{detail}</h2>
          <p className="text-muted-foreground text-sm">
            Specify the number of {detail}
          </p>
        </div>

        {/* Button groups*/}
        <div className="flex items-center gap-x-4">
          <Button
            variant="outline"
            size="icon"
            type="button"
            onClick={decreaseCount}
          >
            <LuMinus className="w-5 h-5 text-primary" />
          </Button>
          <span className="text-xl font-bold w-8 text-center">{count}</span>
          <Button
            variant="outline"
            size="icon"
            type="button"
            onClick={increaseCount}
          >
            <LuPlus className="w-5 h-5 text-primary" />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}

export default CounterInput;
