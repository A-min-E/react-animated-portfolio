import "./main.css";
const Main = () => {
  return (
    <main className="flex">
      <section className="left-section flex">
        <button className="active">all projects</button>
        <button>html & css</button>
        <button>JavaScript</button>
        <button>React & Mui</button>
        <button>Node & express</button>
      </section>
      <section className="flex right-section">
        {["aa", "bb", "cc", 1, 2].map((item) => {
          return (
            <article className="card" key={item}>
              <img src="./project1.png" alt="" width={266} />
              <div style={{ width: "266px" }} className="box">
                <h1 className="title">Landing Page 2</h1>
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
