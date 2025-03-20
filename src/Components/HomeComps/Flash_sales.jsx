import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const Flash_sales = () => {
  //*Time Funcation
  const [timeLeft, setTimeLeft] = useState(4 * 24 * 60 * 60); // 4 days in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / (60 * 60 * 24));
  const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="Main w-full p-6 iflex flex-col gap-y-3">
      <div className="w-full flex flex-col items-start ">
        <div className="flex gap-x-2.5">
          <div className="bg-[#DB4444] h-7 w-4"></div>
          <span className="text-[#DB4444] font-semibold">Today's</span>
        </div>
        <div className="flex justify-between w-full items-end ">
          <div className="flex gap-x-8 items-center">
            <span className="text-3xl font-bold">Flash Sales</span>
            <ul
              className="flex gap-x-3 [&_div]:flex [&_div]:flex-col 
        [&_div]:items-start [&_div]:h-full [&_div]:justify-center"
            >
              <li>
                <div>
                  <span className="text-xs font-bold">Days</span>
                  <span className="text-3xl font-bold">{days}</span>
                </div>
              </li>
              <li>
                <div className="text-3xl font-semibold text-[#DB4444]">:</div>
              </li>
              <li>
                <div>
                  <span className="text-xs font-bold">Hours</span>
                  <span className="text-3xl font-bold">{hours}</span>
                </div>
              </li>
              <li>
                <div className="text-3xl font-semibold text-[#DB4444]">:</div>
              </li>
              <li>
                <div>
                  <span className="text-xs font-bold">Minutes</span>
                  <span className="text-3xl font-bold">{minutes}</span>
                </div>
              </li>
              <li>
                <div className="text-3xl font-semibold text-[#DB4444]">:</div>
              </li>
              <li>
                <div>
                  <span className="text-xs font-bold">Seconds</span>
                  <span className="text-3xl font-bold">{seconds}</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex buttons w-15 h-full gap-x-1">
            <div className="p-1 text-neutral-600 flex justify-center items-center rotate-180 bg-gray-300 w-[50%] rounded-full text-center">
              <FaArrowRight />
            </div>
            <div className="p-1 text-neutral-600 flex justify-center items-center bg-gray-300 w-[50%] rounded-full text-center">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flash_sales;
