import React from "react";

function Dates() {
  return (
    <>
      <form>
        <label>
          <div className="bg-primary w-32 rounded-md text-black">
            <input type="radio" value="option1" checked={true} />
            <h1>4:00</h1>
          </div>
        </label>
        <label>
          <div className="bg-primary w-32 rounded-md text-black">
            <input type="radio" value="option2" />
            <h1>4:00</h1>
          </div>
        </label>
        <label>
          <div className="bg-primary w-32 rounded-md text-black">
            <input type="radio" value="option3" />
            <h1>4:00</h1>
          </div>
        </label>
      </form>
    </>
  );
}

export default Dates;
