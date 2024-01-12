import "./hero.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import developerAnimation from "../../animation/developer.json";
import { motion } from "framer-motion";
import CV from "../../Mohamed_Amine_WISSAR_CV.pdf";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 5, type: "spring", stiffness: 100 }}
            src="./amine.png"
            alt=""
            className="avatar"
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="title"
        >
          Fullstack-Developer &nbsp;
          <a href={CV} download>
            {/* <img src="./resume-.svg" alt="" height="50" /> */}
            (My CV)
          </a>
        </motion.h1>

        <p className="sub-title">
          I'm a Web Developer with a vast experience in the field, I have worked
          in different field with companies and small businesses, that allowed
          me to understand and master the need of the market
        </p>
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          className="envlop-animation"
          animationData={developerAnimation}
          style={{ height: 455 }}
        />
      </div>
    </section>
  );
  // stopped at 2:00:32
};

export default Hero;
