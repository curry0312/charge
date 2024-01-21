import { useState } from "react";
import dayjs from "dayjs";

export function useDate() {
  const year = dayjs().year();
  const month = dayjs().month();
  const [currentYear, setCurrentYear] = useState(year);
  const [currentMonth, setCurrentMonth] = useState(month+1);
  console.log("currentMonth:", currentMonth);
  console.log("currentYear", currentYear);
  function goToPreviousMonth() {
    if (currentMonth === 1) {
      setCurrentYear((prev) => prev - 1);
      setCurrentMonth((prev)=> prev + 12);
    }
    setCurrentMonth((prev) => prev - 1);
  }
  function goToNextMonth() {
    if (currentMonth === 12) {
      setCurrentYear((prev) => prev + 1);
      setCurrentMonth((prev)=> prev - 12);
    }
    setCurrentMonth((prev) => prev + 1);
  }
  return {
    currentYear,
    currentMonth,
    goToPreviousMonth,
    goToNextMonth,
  };
}
