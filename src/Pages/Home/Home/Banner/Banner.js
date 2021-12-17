import React from "react";
import { Button } from "react-bootstrap";
import bg from "../../../../Images/bannerbackground.png";

const Banner = () => {
  return (
    <div
      xs={12}
      md={8}
      style={{
        backgroundImage: `url(${bg})`,
        height: 500,
        width: "100%",
        marginRight: 110,
      }}
    >
      <input
        className="bg-dark color-white"
        style={{ width: "25%", marginTop: 220, borderRadius: 10 }}
        type="search"
        name="search"
        id=""
        placeholder="Search your foods"
      />
    </div>
  );
};

export default Banner;
