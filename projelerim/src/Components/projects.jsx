import Project from "./project";

function Projects({ projects, removeProject }) {
  return (
    <div className="projectsMainDiv">
      <div>
        <h2>Projelerim</h2>
      </div>
      <div className="cardDiv">
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              {...project}
              removeOneProject={removeProject}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
