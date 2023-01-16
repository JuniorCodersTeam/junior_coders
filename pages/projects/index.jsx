import { ProjectCard } from "../../components/Projects/ProjectCard";
import ContentService from "../../lib/contentful";

export async function getStaticProps() {
  const items = await new ContentService("projects").getEntriesByType();

  const projects = items.filter(
    (el) => el.fields?.author.fields.author === "Junior Coders"
  );

  const projectsToShow = projects.sort(
    (a, b) => a.fields.order - b.fields.order
  );

  return {
    props: { projectsToShow },
    revalidate: 30,
  };
}

const Projects = ({ projectsToShow }) => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Nasze projekty</h2>
        <div className="project-cards">
          {projectsToShow.map((project) => (
            <ProjectCard project={project} key={project.sys.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
