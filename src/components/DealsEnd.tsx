import React, { useEffect, useState } from "react";

const getRestTime = (current: Date): string => {
  const lastDate = new Date("2024-03-15");
  const lastDateTimestamp = Math.floor(lastDate.getTime() / 1000);
  const currentTimestamp = Math.floor(current.getTime() / 1000);

  const differenceSeconds = lastDateTimestamp - currentTimestamp;

  const days = Math.floor(differenceSeconds / (60 * 60 * 24));
  const hours = Math.floor((differenceSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((differenceSeconds % (60 * 60)) / 60);
  const seconds = differenceSeconds % 60;

  return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
};

const DealsEnd: React.FC = () => {
  const [time, setTime] = useState<string>(getRestTime(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getRestTime(new Date()));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>
        Deals ends in:
        <span className="bg-warning300 ml-2 p-1.5 rounded-[2px] text-[16px]">
          {time}
        </span>
      </p>
    </div>
  );
};

export default DealsEnd;
