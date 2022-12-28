import React from "react";
import "./Photo.scss";
const Photo = () => {
  return (
    <div className="imgWrapper">
      <img
        src="https://kaspi.kz/img/main_logo.svg"
        alt="kaspi"
      />
      <div className="phone">
        <img
          className="phone"
          src="https://kaspi.kz/img/phone-3x-n.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Photo;
