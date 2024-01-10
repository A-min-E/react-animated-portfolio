import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/Animation.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("meqyoqga");
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
        <form action="" className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="">Email Adresse : </label>
            <input
              required
              autoComplete="off "
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div style={{ marginTop: "24px" }} className="flex">
            <label htmlFor="">Your Message : </label>
            <textarea required name="message" id="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex"
              style={{
                justifyContent: "center",
                fontSize: "18px",
                marginTop: "1.7rem",
              }}
              // 06:35:57
            >
              <Lottie
                loop={false}
                animationData={doneAnimation}
                style={{ height: 90 }}
              />
              Your message has been sent successfully 👌🏻
            </p>
          )}
        </form>
        <div className="animation">anim</div>
      </div>
    </section>
  );
};
// 06:15:05
export default Contact;
