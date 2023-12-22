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
      <section className="right-section">
        <article className="card">
          <img src="./project1.png" alt="" width={266} />
          <div style={{ width: "266px" }} className="border box">
            <h1 className="title">Landing Page 2</h1>
            <p className="sub-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              eveniet commodi nulla cum. Aliquid saepe, iusto beatae doloribus
              sint eaque!
            </p>
            <div className="flex icons">
              <div className="icon-link"></div>
              <div className="icon-github"></div>
              <a href="">
                more <span className="icon-arrow_forward"></span>
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Main;
