import React from "react";
import "./hospitalPage.css";
import OvalCopy from "../image/OvalCopy.svg";
import Oval from "../image/Oval.svg";

import Button from "@mui/material/Button";
import Navbar from "../component/Navbar/Navbar";
import { Footer } from "../component/Footer/Footer";
import Rectangle from "../image/Rectangle.svg";
import { Card } from "@mui/material";
import Tooth from "../image/tooth.svg";
import HumanBrain from "../image/humanBrain.svg";
import Lungs from "../image/lungs.svg";
import MedicalFile from "../image/medicalFile.svg";
import Van from "../image/doctor-woman copy 2.svg";
import Doctor from "../image/doctor-woman copy.svg";
import DoctorWomen from "../image/doctor-woman.svg";
import RectangleBox from "../image/RectangleBox.svg";
import OvalCopy2 from "../image/Oval Copy 2.svg";
import { CommentCard } from "../component/CommentCard/CommentCard";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import axios from "axios";
import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Checking = () => {
  const [first, setfirst] = useState();
  const [firstPage, setfirstPage] = useState("");
  const [lastPage, setlastPage] = useState("");
  const [currentPage, setcurrentPage] = useState("");

  useEffect(() => {
    axios
      .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then((resp) => {
        setfirst(resp);
        setcurrentPage(resp.data.links.first);
      });
  }, []);
  useEffect(() => {
    if (currentPage.slice(50) !== "" && currentPage.slice(50) !== "1") {
      axios.get(currentPage).then((response) => {
        setfirst(response);
      });
    }
  }, [currentPage]);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  const PrevPage = () => {
    if (currentPage.slice(50) !== "1") {
      var thePage = Number(currentPage.slice(50)) - 1;
      setcurrentPage(currentPage.slice(0, 50) + thePage);
    }
  };
  const NextPage = () => {
    if (currentPage.slice(50) !== "56") {
      var thePage = Number(currentPage.slice(50)) + 1;
      setcurrentPage(currentPage.slice(0, 50) + thePage);
    }
    console.log(currentPage);
  };

  return (
    <div className="page">
      <div className="container">
        <Navbar Contact />
        <div className="Ovals">
          <img className="OvalCopy" src={OvalCopy} alt="OvalCopy" />
          <img className="Oval" src={Oval} alt="Oval" />
        </div>
        <div className="pageOne">
          <div className="pageOneFirst">
            <div className="pageOneHeading">
              <p>Welcome to MediCare+ Clinic</p>
              <h1>Best Specialists</h1>
              <p>
                We are on the leading edge of cancer care. Providing the full
                continuum of cancer treatments and supportive care services in a
                single convenient location.
              </p>
              <div className="pageOneButtons">
                <Button variant="contained" color="primary">
                  Make an Appointment
                </Button>
                <Button variant="contained" color="primary">
                  {" "}
                  Depatrtment
                </Button>
              </div>
            </div>
            <div>
              <img className="Rectangle" src={Rectangle} alt="Rectangle" />
            </div>
          </div>
          <div>
            <div className="ourServices">
              <h1>Our Services</h1>
              <p>
                We provide the most full medical services, so every person could
                heave the oppurtunity to receive qualitative medical help.
              </p>
            </div>
            <div className="cards">
              <Card sx={{ maxWidth: 200 }}>
                <img className="Tooth" src={Tooth} alt="Tooth" />
                <h3>Dental Care</h3>
              </Card>
              <Card sx={{ maxWidth: 200 }}>
                <img className="Lungs" src={Lungs} alt="Lungs" />
                <h3>Pulmonary</h3>
              </Card>
              <Card sx={{ maxWidth: 200 }}>
                <img className="HumanBrain" src={HumanBrain} alt="HumanBrain" />
                <h3>Neurological</h3>
              </Card>

              <Card sx={{ maxWidth: 200 }}>
                <img
                  className="MedicalFile"
                  src={MedicalFile}
                  alt="MedicalFile"
                />
                <h3>Prediatrics</h3>
              </Card>
            </div>
          </div>
        </div>
        <div className="pageTwo">
          <div className="pageTwoHeading">
            <h1>Clinic With Innovative</h1>
            <p>
              We provide the most full medical services, so every person could
              heave the oppurtunity to receive qualitative medical help.
            </p>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </div>
          <div className="pageTwoIcons">
            <div className="item-a">
              <img
                className="RectangleBox "
                src={RectangleBox}
                alt="RectangleBox"
              />

              <img
                className="DoctorWomen"
                src={DoctorWomen}
                alt="DoctorWomen"
              />
              <h3 className="DoctorIconText">Qualified Doctors</h3>
            </div>
            <div className="item-b">
              <img
                className="RectangleBox "
                src={RectangleBox}
                alt="RectangleBox"
              />
              <img className="DoctorWomen" src={Doctor} alt="Doctor" />{" "}
              <h3 className="DoctorIconText">Emergency Care</h3>
            </div>
            <div className="item-c">
              <img
                className="RectangleBox "
                src={RectangleBox}
                alt="RectangleBox"
              />
              <img className="DoctorWomen" src={Van} alt="Van" />{" "}
              <h3 className="DoctorIconText">24 Hours Service</h3>
            </div>
          </div>
        </div>
        <div className="pageThree">
          {/* <div className="OvalCopy2">
            <div></div>
            <img src={OvalCopy2} alt=" OvalCopy2" />
          </div> */}
          <div className="pageThreeHeading">
            {" "}
            <h1>We Have The Best Specialist</h1>
            <p>
              We have a wide experience in experience design and strategy, with
              locally-rooted knowledge.
            </p>
          </div>
          <div className="cardsTwo">
            <Card sx={{ maxWidth: 200 }}>
              <img src={DoctorWomen} alt="DoctorWomen" />
              <h3 className="cardsTwoHeading">Dr. Awaatif Al</h3>
              <p className="cardsTwoHeading">Dental Care</p>
            </Card>
            <Card sx={{ maxWidth: 200 }}>
              <img src={DoctorWomen} alt="DoctorWomen" />
              <h3 className="cardsTwoHeading">Dr. Filipa Gaspar</h3>
              <p className="cardsTwoHeading">Cardiology</p>
            </Card>
            <Card sx={{ maxWidth: 200 }}>
              <img src={DoctorWomen} alt="DoctorWomen" />
              <h3 className="cardsTwoHeading">Dr. Sukhmeet Gorae</h3>
              <p className="cardsTwoHeading">Neurological</p>
            </Card>
            <Card sx={{ maxWidth: 200 }}>
              <img src={DoctorWomen} alt="DoctorWomen" />
              <h3 className="cardsTwoHeading">Dr. Siri Jakobsson</h3>
              <p className="cardsTwoHeading">Prediatrics</p>
            </Card>
          </div>
          <div>
            <div className="commentSection">
              <h1>What Our Customers Say</h1>
              <div className="commentsWindow">
                {/* <h1>h</h1>
                <h1>e</h1>
                <h1>r</h1> */}
                <Button variant="contained" onClick={slideLeft}>
                  Prev
                </Button>
                <div id="slider" className="commentCards">
                  {first &&
                    first.data.data.map((e) => {
                      return <CommentCard Name={e.Name} Reviews={e.Reviews} />;
                    })}
                </div>
                <Button variant="contained" onClick={slideRight}>
                  Next
                </Button>
              </div>
              <div className="commentPageButtons">
                <Button variant="contained" onClick={PrevPage}>
                  Prev Page
                </Button>
                <Button variant="contained" onClick={NextPage}>
                  Next Page
                </Button>
              </div>
            </div>
          </div>
          <div className="emailSection">
            <h2>Subscribe to Newsletter</h2>
            <p>We have a wide experience in experience design and strategy</p>
            <Paper
              component="form"
              sx={{
                p: "1rem 1rem",
                display: "flex",
                alignItems: "center",
                width: 800,
                borderRadius: "0.5rem",
                position: "relative",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter your email address"
                inputProps={{ "aria-label": "search google maps" }}
              />

              <Button variant="contained" color="primary">
                Send Now
              </Button>
            </Paper>
          </div>
        </div>

        <Navbar />
      </div>
      <Footer />
    </div>
  );
};

export default Checking;
