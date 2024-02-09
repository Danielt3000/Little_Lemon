import React from "react";

function Dates({ days }) {
  const time = [
    ["12:00 PM"],
    ["6:00 AM", "11:00 AM", "8:00 AM", "2:00 PM"],
    ["7:00 AM", "6:00 PM", "2:00 PM", "9:00 AM", "4:00 PM"],
    ["10:00 PM", "3:00 PM", "11:00 AM"],
    ["8:00 AM"],
    ["8:00 AM", "7:00 PM", "4:00 PM", "5:00 PM"],
    ["1:00 PM", "2:00 PM", "5:00 AM", "5:00 PM", "6:00 AM"],
    ["1:00 PM", "6:00 PM", "3:00 PM", "2:00 AM"],
    ["1:00 PM", "6:00 PM", "3:00 PM", "2:00 AM"],
    ["3:00 PM", "9:00 PM", "8:00 AM", "1:00 PM", "6:00 PM"],
    ["1:00 PM", "11:00 AM", "6:00 PM", "8:00 PM"],
    ["5:00 PM", "8:00 PM", "3:00 PM", "12:00 PM"],
    [],
    ["9:00 AM", "3:00 PM", "5:00 PM", "12:00 PM", "10:00 AM", "11:00 AM"],
    ["2:00 PM", "11:00 AM", "4:00 PM", "1:00 PM"],
    ["2:00 PM", "10:00 AM", "7:00 AM", "6:00 PM"],
    ["11:00 AM", "10:00 PM", "3:00 PM", "7:00 PM"],
    ["9:00 PM"],
    ["8:00 AM", "7:00 PM", "5:00 PM", "4:00 PM"],
    ["8:00 PM", "5:00 PM", "1:00 PM", "5:00 AM"],
    ["3:00 AM", "2:00 PM"],
    ["12:00 PM", "4:00 PM", "10:00 AM", "9:00 AM"],
    ["9:00 PM", "7:00 PM", "11:00 PM"],
    ["11:00 AM", "8:00 AM", "1:00 PM"],
    ["5:00 PM", "12:00 PM", "8:00 PM", "3:00 PM"],
    ["4:00 PM", "2:00 PM", "10:00 AM", "7:00 PM"],
    [],
    ["6:00 AM", "2:00 PM", "11:00 AM", "8:00 AM"],
    ["10:00 AM", "7:00 AM"],
    ["10:00 PM", "7:00 PM", "11:00 AM", "10:00 AM"],
    ["9:00 PM", "8:00 PM", "5:00 PM", "12:00 PM"],
  ];

  return (
    <form className=" grid grid-cols-2  place-items-center gap-3 ">
      {time[days].map((timeValue, index) => (
        <div key={index} className="bg-primary w-32 rounded-md text-white ">
          <input type="radio" value={timeValue} checked={true} />
          <h1>{timeValue}</h1>
        </div>
      ))}
    </form>
  );
}

export default Dates;
