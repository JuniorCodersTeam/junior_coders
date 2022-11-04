import { createClient } from "contentful";
import { ProjectCard } from "../../components/Projects/ProjectCard";

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const { items } = await client.getEntries({
        content_type: "projects",
    });

    const projects = items.filter(
        (el) => el.fields?.author.fields.author == "Junior Coders"
    );

    const projectsToShow  = projects.sort((a,b) => a.fields.order - b.fields.order) 

    return {
        props: { projectsToShow }
        };
    }

const Projects = ({ projectsToShow }) => {

    return (
        <section className="projects-section">
            <div className="projects-container">
                <h2 className="projects-title">Nasze projekty</h2>
                <div className="project-cards">
                {projectsToShow.map((project) => (
                    <ProjectCard 
                        project={project}     
                        key={project.sys.id} 
                    />
                ))}
                </div>
            </div>
        </section>
        
    );
};

export default Projects;
