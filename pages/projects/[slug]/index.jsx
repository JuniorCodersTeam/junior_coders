import {createClient} from "contentful";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import Projects from "..";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async() => {
    const res = await client.getEntries({content_type: "projects"})

    const paths = res.items.map(item => {
        return {
            params: {
                slug: item.fields.slug
            }
        }
    })

    return {paths, fallback: false}
}

export const getStaticProps = async({params}) => {
    const {items: project} = await client.getEntries({content_type: "projects", "fields.slug": params.slug})
    
    return {props: {project}, revalidate: 30}
}

const Project = ({project}) => {

    const router = useRouter()
    const path = router.asPath.replaceAll("/", " ").split(" ").slice(1)

    console.log(router.asPath.replaceAll("/", " ").split(" ").slice(1))
    console.log(project)


    return (
        <>
        
        <div className="projects-container">
            <div className="path-links">
                <Link href="/"><span className="path-link">home</span></Link>
                <BsChevronRight className="back-icon" />
                <span className="path-link" onClick={() => router.back()}>{path[0]}</span>
                <BsChevronRight className="back-icon" />
                <span className="path-link" onClick={() => router.reload()}>{path[1]}</span>
            </div>
            <h2 className="projects-title">{project[0].fields.title}</h2>
            
            {/* <button type="button" onClick={() => router.back()}>
                Click here to go back
            </button> */}
        </div>
            
        </>
        
    )
}

export default Project;

