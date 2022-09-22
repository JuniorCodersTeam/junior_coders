import {createClient} from "contentful";
import { useRouter } from "next/router";

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
    console.log(project)
    console.log(useRouter())


    return (
        <div>Projekt</div>
    )
}

export default Project;