import React from "react";
import { useSelector } from "react-redux";
import Pin from "./Pin";
import "../../App.css";

const Pins = () => {
  const pins = useSelector((state) => state.pin.pins);
  if (pins.length == 0) {
    return (
      <h2 id="body" style={{ paddingTop: "12rem" }}>
        No Pins generated..
      </h2>
    );
  } else
    return (
      <div>
        <table className="table shadow">
          <thead className="bg-white text-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Pin Generated</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pins.map((pin) => (
              <Pin pin={pin} />
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Pins;
