import React from "react";
import "./Footers.css";

const Footers = () => {
  return (
    <div className="footer">
      <div className="contact">
        <h2>Contact</h2>
        <p>Central University Of Haryana</p>
        <p>
          Email: <a href="mailto:codingclub@cuh.ac.in">codingclub@cuh.ac.in</a>
        </p>
        <p>
          Phone: <a href="tel:+91 9999999999">+91 9999999999</a>
        </p>
      </div>
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5382.7501587263405!2d76.13636795054236!3d28.35333113490718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39129577ce587a0b%3A0xbdc1de187d4dccf9!2sCentral%20University%20of%20Haryana!5e0!3m2!1sen!2sin!4v1719585135441!5m2!1sen!2sin"
          width="200"
          height="180"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footers;
