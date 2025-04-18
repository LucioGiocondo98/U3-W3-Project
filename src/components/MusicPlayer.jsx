import React from "react";
import { Button } from "react-bootstrap";
import { FaMusic, FaPlay, FaForward } from "react-icons/fa";

function MusicPlayer() {
  return (
    <div
      className="d-flex align-items-center bg-dark rounded-3 p-2 text-white border border-white fixed-bottom d-lg-none"
      style={{ backgroundColor: "#2c2c2e" }}
    >
      <div
        className="d-flex justify-content-center align-items-center rounded-2 flex-shrink-0"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "#48484a",
          marginRight: "15px",
        }}
      >
        <FaMusic size={20} />
      </div>

      <div className="flex-grow-1" style={{ marginRight: "15px" }}></div>

      <div className="d-flex align-items-center">
        <Button
          variant="link"
          className="text-white p-0"
          style={{ marginRight: "10px" }}
        >
          <FaPlay size={24} />
        </Button>

        <Button variant="link" className="text-white p-0">
          <FaForward size={24} />
        </Button>
      </div>
    </div>
  );
}

export default MusicPlayer;
