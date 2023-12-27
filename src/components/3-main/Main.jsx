import "./main.css";
import { useState } from "react";
const myProjects = [
  {
    projectTitle: "react project",
    category: "react",
    imgPath: "./project1.png",
  },
  {
    projectTitle: "css project",
    category: "css",
    imgPath: "./project1.png",
  },
  {
    projectTitle: "bootstap & react project",
    category: ["react", "bootstrap"],
    imgPath: "./project1.png",
  },
];
// 5:02:14
const Main = () => {
  const [isActive, setIsActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            setIsActive("all");
            const newArr = myProjects.filter((itm) => {
              return itm.category === isActive.toString();
            });
            setArr(newArr);
          }}
          className={isActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            setIsActive("css");
            const newArr = myProjects.filter((itm) => {
              return itm.category === "css";
            });
            setArr(newArr);
          }}
          className={isActive === "css" ? "active" : null}
        >
          html & css
        </button>
        <button
          onClick={() => setIsActive("js")}
          className={isActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            setIsActive("react");
            const newArr = myProjects.filter((itm) => {
              return itm.category === "react";
            });
            setArr(newArr);
          }}
          className={isActive === "react" ? "active" : null}
        >
          React & Mui
        </button>
      </section>
      <section className="flex right-section">
        {arr.map((item) => {
          return (
            <article className="card" key={item.imgPath}>
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
                  <a href="" className="link flex">
                    more{" "}
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow_forward"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
