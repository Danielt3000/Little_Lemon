import React, { useReducer, useState } from "react";
import dayjs from "dayjs";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { MobileTimePicker } from "@mui/x-date-pickers";
import reservation from "../assets/re.png";
import reducer from "./cases";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
function Reservations() {
  const initialState = {
    guest: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function increase() {
    dispatch({ type: "INCREASE" });
  }

  function decrease() {
    dispatch({ type: "DECREASE" });
  }

  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <header className=" max-sm:bg-dish2 bg-no-repeat bg-cover  sm:bg-primary   flex  max-sm:items-center max-sm:justify-center max-sm:text-center md:justify-center    ">
        <div className="flex flex-col w-96 pl-2  lg:mr-60 ">
          <span className="text-6xl text-secondary ">Reserve</span>
          <span className="text-3xl mt-4">a Table</span>
          <span className="text-xl mt-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            perspiciatis alias nemo repellendus nesciunt quis, similique ut. At,
            ipsam.
          </span>
          <div className="mt-10 mb-10 flex justify-center">
            <span className="px-10 py-4 bg-secondary text-black font-bold rounded-md ">
              Find Table
            </span>
          </div>
        </div>
        <div className=" max-sm:hidden relative top-10   mb-5">
          <img src={reservation} alt="" />
        </div>
      </header>
      <section>
        <div className=" text-4xl flex  align-middle justify-around py-5 text-white">
          <h1 className="text-primary font-bold ">GUESTS</h1>
          <div className="flex py-1 px-3 rounded-lg bg-primary">
            <button onClick={decrease}>-</button>
            <h1 className="mx-4">{state.guest}</h1>
            <button onClick={increase}>+</button>
          </div>
        </div>
      </section>
      <div className="bg-weekback text-center">
        <h5 className="text-primary font-bold text-4xl">DATE</h5>
      </div>
      <div className="m-10 text-black">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
        <div className="text-white">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileTimePicker
              defaultValue={dayjs("2022-04-17T15:30")}
              className="py-4 px-3 bg-primary  rounded-lg font-bold text-xl text-white"
            />
          </LocalizationProvider>
          <button className="py-4 px-3 bg-primary  rounded-lg font-bold text-xl">
            OCCASION
          </button>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Reservations;
