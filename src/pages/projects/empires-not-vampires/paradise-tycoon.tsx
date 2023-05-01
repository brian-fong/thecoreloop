// Components
import Project from "../../../components/Project/Project";

// Mock data for project submission
import PROJECTS from "../../../data/project-submissions";

export default function index() {
  return (
    <Project project={PROJECTS[2]} />
  );
}


