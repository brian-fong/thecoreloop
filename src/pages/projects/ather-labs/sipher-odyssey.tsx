// Components
import Project from "../../../components/Project/Project";

// Mock data for project submissions
import PROJECTS from "../../../utils/data/project-submissions";

export default function index() {
  return (
    <Project project={PROJECTS[0]} />
  );
}
