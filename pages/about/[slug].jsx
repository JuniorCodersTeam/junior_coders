import {createClient} from "contentful";
import Image from "next/image";
import { Button } from "../../components/UI/Button";
import { ProjectCard} from "../../components/Projects/ProjectCard"

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async() => {
    const res = await client.getEntries({content_type: "author"})

    const paths = res.items.map(item => {
        return {
            params: {
                slug: item.fields.slug
            }
        }
    })

    return {paths, fallback: false}
}

export async function getStaticProps({params}) {
    const {items} = await client.getEntries( {
        content_type: "author",
        "fields.slug": params.slug
    })

    const {items: projects} = await client.getEntries( {
        content_type: "projects",
    })
// wyskakuje undefined bo nie wszystkie projekty mają dodanego autora
    const foundProjects = projects.filter(el => el.fields?.author.fields.author == items[0].fields.author)

    
    return {props: {items, projects, foundProjects}}
}


const Author = ({items, foundProjects}) => {

    return (
        <>
        <div className="author-bg">
        <div className="container author-container">

            <h1>{items[0].fields.author}</h1>

            <section className="author">
                <Image 
                    loader={() => items[0].fields.photo?.fields.file.url }
                    src={items[0].fields.photo?.fields.file.url}
                    alt={items[0].fields.photo?.fields.description}
                    width={200}
                    height={200}  
                    className="photo"
                />

                <div className="author-content">
                    <p>{items[0].fields.about}</p>
                </div>

                <div  className="project-cards">

                {foundProjects.map((project) => (
                    <ProjectCard project={project} key={project.fields.order}/>                 
                ))}

                </div>
            
            </section>
            
        </div>
        </div>
        </>
    )
                
}

export default Author