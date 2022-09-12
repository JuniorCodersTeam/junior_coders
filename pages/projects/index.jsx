import { createClient } from "contentful";
import { ProjectCard } from "../../components/Projects/ProjectCard";

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });

    const { items: projects } = await client.getEntries({
        content_type: "projects",
    });

    return {
        props: { projects }
        };
    }

const Projects = ({ projects }) => {

    console.log(projects)

    return (
        <div className="projects-container">
            <h2 className="projects-title">Nasze projekty</h2>
            <div className="project-cards">
            {projects.map((project) => (
                <ProjectCard 
                    project={project}     
                    key={project.sys.id} 
                />
            ))}
            </div>
            
        </div>
    );
};

export default Projects;
