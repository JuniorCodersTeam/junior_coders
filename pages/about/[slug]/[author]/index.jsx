import { Project} from "../../../projects/[slug]/index";
import { createClient } from "contentful";
import { useRouter } from "next/router";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async() => {
    const res = await client.getEntries({content_type: "projects"})

    console.log(res.items)
    const paths = res.items.map(item => {

        return {
            params: {
                author: item.fields.slug
            }
        }
    })

    return {paths, fallback: false}
}

export const getStaticProps = async({params}) => {
    const {items: project} = await client.getEntries({content_type: "projects", "fields.slug": params.author})
    
    return {props: {project}, revalidate: 30}
}


// nie działa, nie włącza bo powiela się niby ścieżka
const AuthorCurrentProject = ({project}) => {

    console.log(project)
    return (
        <>
        <Project project={project}/>
        </>
    )
}

export default AuthorCurrentProject