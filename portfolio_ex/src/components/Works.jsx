import worksData from "../data/worksData";
import "../styles/Works.css";
import WorkCard from "./WorkCard";
function Works() {
  return (
    <>
      <section id="works">
        <h1>작업물</h1>
        <div className="card-wrap">
          {worksData.map((item) => (
            <WorkCard key={item.id}
            title={item.title}
            category={item.category}
            image={item.image}
            desc={item.desc}
             />
          ))}
        </div>
      </section>
    </>
  );
}
export default Works;
