import "./ProjectCard.css";

function ProjectCard({ name, description, technologies }) {
  return (
    <div className="project-card">
      <h3>{name} ⭐</h3>
      <p>{description}</p>
      <ul className="tech-list">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
