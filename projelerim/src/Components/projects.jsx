import { useState } from "react";
import Project from "./project";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Projects({ projects, removeProject }) {
  const [index, setIndex] = useState(0);
  const { title, latest_update, content } = projects[index];
  const prevProject = () => {
    setIndex((i) => {
      let newIndex = i - 1;
      if (newIndex < 0) newIndex = projects.length - 1;

      return newIndex;
    });
  };
  const nextProject = () => {
    setIndex((i) => {
      let newIndex = i + 1;
      if (newIndex > projects.length - 1) newIndex = 0;
      return newIndex;
    });
  };
  const randomProject = () => {
    let newIndex = Math.round(Math.random() * (projects.length - 1));
    console.log(newIndex);
    if (newIndex === index) return randomProject();
    setIndex(newIndex);
  };
  return (
    <div className="projectsMainDiv">
      <div className="projectTitleAndBtn">
        <h2>Projelerim</h2>
        <button className="refreshButton" onClick={randomProject}>
          Rastgele Proje Ata
        </button>
      </div>
      <div className="cardDiv">
        <button className="prevNextBtn" onClick={prevProject}>
          <FaChevronLeft />
        </button>

        <div className="card">
          <div className="cardInfo">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardLastUpdate">{latest_update}</h4>
          </div>
          <p>{content}</p>
        </div>
        <button className="prevNextBtn" onClick={nextProject}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Projects;
