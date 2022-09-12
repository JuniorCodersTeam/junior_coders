import { createClient } from "contentful";

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
        </div>
    );
};

export default Projects;
