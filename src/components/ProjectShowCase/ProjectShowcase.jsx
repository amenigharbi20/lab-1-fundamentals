import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectShowcase.css";

function ProjectShowcase({ projects }) {
  return (
    <div className="project-showcase">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}

export default ProjectShowcase;
