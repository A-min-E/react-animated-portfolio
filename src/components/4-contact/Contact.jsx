import React from "react";
import "./contact.css";
const Contact = () => {
  // 3:41:00
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new
      </p>
      <div className="flex">
        <form action="" className="">
          <div className="flex">
            <label htmlFor="">Email Adresse : </label>
            <input required type="email" name="" id="email" />
          </div>
          <div style={{ marginTop: "24px" }} className="flex">
            <label htmlFor="">Your Message : </label>
            <textarea required name="" id="message"></textarea>
          </div>
          <button className="submit">Submit</button>
        </form>
        <div className="animation ">anim</div>
      </div>
    </section>
  );
};

export default Contact;
