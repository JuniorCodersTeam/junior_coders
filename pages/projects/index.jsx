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

    const projects  = items.sort((a,b) => a.fields.order - b.fields.order) 

    return {
        props: { projects }
        };
    }

const Projects = ({ projects }) => {

    return (
        <div className="projects-container">
            <h2 className="projects-title">Nasze projekty</h2>
            <div className="project-cards">
            {projects.sort((a,b) => a.fields.order - b.fields.order).map((project) => (
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
