import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "7:00 AM - 10:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "8:00 AM - 11:00 PM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "7:00 AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "8:00 AM - 11:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "7:00 AM - 10:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "8:00 AM - 11:00 PM",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Working Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact Us</h4>
            <div>
              <FaPhone />
              <span>420-420-9211</span>
            </div>
            <div>
              <MdEmail />
              <span>support@medi.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Allahabad, Uttar Pradesh</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
