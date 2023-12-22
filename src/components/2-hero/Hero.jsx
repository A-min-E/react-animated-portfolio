import "./hero.css";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="./amine.png" alt="" className="avatar" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">Fullstack-Developer</h1>
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
      <div className="right-section animation border">ccc</div>
    </section>
  );
  // stopped at 2:00:32
};

export default Hero;
