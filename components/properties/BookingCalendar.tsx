'use client'
import { DateRange } from "react-day-picker";
import { Calendar } from "../ui/calendar";
import { useState } from "react";

function BookingCalendar() {
  const currentDate = new Date();
  const defaultSelected: DateRange = { from: undefined, to: undefined };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  return (
    <Calendar
      mode="range"
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
    />
  );
}
export default BookingCalendar;
