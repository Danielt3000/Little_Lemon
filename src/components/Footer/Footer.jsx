import React from "react";
import { Link } from "react-router-dom";
import corridor from "../assets/corridor.png";
function Footer() {
  return (
    <div className="text-black  bg-primary py-5">
      <footer className=" content-center  text-center  sm:flex sm:flex-row sm:justify-evenly align-middle">
        <div>
          <img src={corridor} className="max-sm-hidden" />
        </div>
        <div className=" flex sm:flex-col  max-smjustify-evenly text-white ">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Menu</Link>
        </div>
        <div className="max-sm:my-5 text-secondary font-semibold ">
          <h1>Vancuver, Canada</h1>
          <h1>(775)123-4567</h1>
          <h1>LittleLemon@BestRestaurant.com</h1>
        </div>
        <div className="flex sm:flex-col  max-sm:justify-evenly text-white">
          <Link>Reservations</Link>
          <Link>Order Online</Link>
          <Link>Login</Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
