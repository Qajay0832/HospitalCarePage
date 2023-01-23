import React from "react";
import MediCare from "../../image/MediCare.svg";
import Button from "@mui/material/Button";
import "./navbar.css";

const Navbar = ({ Contact = false }) => {
  console.log(Contact);
  return (
    <div className="navbar">
      {" "}
      <div className="mediCare">
        {" "}
        <img src={MediCare} alt="MediCare" />
      </div>
      <div>
        <Button color="primary">Home</Button>
        <Button color="primary">About</Button>
        <Button color="primary">Service</Button>
        <Button color="primary">News</Button>
        {Contact && (
          <Button variant="contained" color="primary" className="contactButton">
            Contact
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
