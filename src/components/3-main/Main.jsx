import "./main.css";
import { useState } from "react";
import { myProjects } from "./myProjects.js";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
// 5:25:14
const Main = () => {
  const [isActive, setIsActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    setIsActive(buttonCategory);
    const newArr = myProjects.filter((itm) => {
      const cat = itm.category.find((it) => {
        return it === buttonCategory;
      });
      return cat === buttonCategory;
    });
    setArr(newArr);
  };
  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            setIsActive("all");
            setArr(myProjects);
          }}
          className={isActive === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            handleClick("js");
          }}
          className={isActive === "js" ? "active" : null}
        >
          html & css & js
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={isActive === "react" ? "active" : null}
        >
          React & Mui
        </button>
      </section>
      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ dumping: 8, type: "spring", stiffness: 50 }}
                className="card"
                key={item.imgPath}
              >
                <img src={item.imgPath} alt="" width={266} />
                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    eveniet commodi nulla cum. Aliquid saepe, iusto beatae
                    doloribus sint eaque!
                  </p>
                  <div className="flex icons">
                    <div className="flex" style={{ gap: "11px" }}>
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>
                    <a
                      href={item.webSite}
                      className="link flex"
                      target="_blank"
                      rel="noreferrer"
                    >
                      more{" "}
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow_forward"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
