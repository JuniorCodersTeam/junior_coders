import {createClient} from "contentful";
import Image from "next/image";
import { Button } from "../../components/UI/Button";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

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
console.log(foundProjects)
    console.log(foundProjects)

    return (
        <>
        <div className="author-bg">
            <div className="container author-container">
                <section className="author">
                    <div className="photo-box">
                        <Image 
                            loader={() => items[0].fields.photo?.fields.file.url }
                            src={items[0].fields.photo?.fields.file.url}
                            alt={items[0].fields.photo?.fields.description}
                            width={150}
                            height={150}  
                            className="photo"
                        />
                    </div>
                    <h2 className="author-name">{items[0].fields.author.split(' ')[0]}</h2>

                    <div className="author-content">
                        <p>{items[0].fields.about}</p>
                    </div>

                <div  className="project-cards">

                {foundProjects.map((project) => (
                    <div key={project.fields.order} className="project-card">
                    <Image
                        alt={project.fields.title}
                        src={`https:${project.fields.image.fields.file.url}`}
                        width="384"
                        height="288"
                        className="blog-card--image"
                        objectFit="cover"
                        objectPosition="top"
                    />
                    <div className="title-bar">
                        <h2>{project.fields.title}</h2>
                    </div>
                    
                    <p>{project.fields.description}</p>
                    <div className="technologies">
                        <h3>Technologie:</h3>
                        <p>{project.fields.technologies}</p>
                    </div>
                    <div className="project-card--action">
                        {/* poniższe wyswietla poprawną scieżkę */}
                        <Button current={items[0].fields.slug} link={project.fields.slug} />
                    </div>
                </div> 
                
            ))}

</div>
            </section>
            
        </div>
        </div>
        </>
    )
}

export default Author