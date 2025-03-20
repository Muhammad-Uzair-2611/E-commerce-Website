import React from "react";

const Flash_sales = () => {
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
                  <span className="text-sm">Days</span>
                  <span className="text-3xl font-bold">03</span>
                </div>
              </li>
              <li>
                <div className="text-3xl font-semibold text-[#DB4444]">:</div>
              </li>
              <li>
                <div>
                  <span className="text-sm">Hours</span>
                  <span className="text-3xl font-bold">12</span>
                </div>
              </li>
              <li>
                <div className="text-3xl font-semibold text-[#DB4444]">:</div>
              </li>
              <li>
                <div>
                  <span className="text-sm">Minutes</span>
                  <span className="text-3xl font-bold">54</span>
                </div>
              </li>
              <li>
                <div className="text-3xl font-semibold text-[#DB4444]">:</div>
              </li>
              <li>
                <div>
                  <span className="text-sm">Seconds</span>
                  <span className="text-3xl font-bold">05</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="buttons border w-10 h-full">
            <span className="w-10 bg-gray-400 h-5  ">1</span>
            <span className="w-10 bg-gray-400 h-5  ">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flash_sales;
