import React from "react";
import "./hero.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Heros = () => {
  const [text] = useTypewriter({
    words: [
      "Code. Create. Collaborate Join the Revolution.",
      "Empowering Innovators , One Line of Code at a Time.",
      "Think Code, Think Big ,Transform Ideas into Reality.",
      "Where Creativity Meets Code , Inspiring the Future Together.",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 60,
  });
  return (
    <div className="center-wrapper">
      <h1 className="hero-body">
        <span className="hero-span">{text}</span>
        <span className="hero-crusor">
          <Cursor cursorStyle="<" />
        </span>
      </h1>
      <button className="register-button">
        <a href="https://chat.whatsapp.com/Jql2swXf1NwFtWSfzE5qAg">Join us</a>
      </button>
    </div>
  );
};

export default Heros;
