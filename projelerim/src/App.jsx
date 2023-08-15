import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Projects from "./Components/projects";
import Loading from "./Components/loading";

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchProject = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/projects");
      setProjects(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
    }
  };
  const deleteProject = (id) => {
    const newproject = projects.filter((project) => project.id !== id);
    setProjects(newproject);
  };
  useEffect(() => {
    fetchProject();
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {projects.length === 0 ? (
            <div className="refreshMainDiv">
              <div className="refreshCard">
                Projelerin hepsi silindi Yenilensin mi?
                <button className="refreshButton" onClick={fetchProject}>
                  Yenile
                </button>
              </div>
            </div>
          ) : (
            <Projects projects={projects} removeProject={deleteProject} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
