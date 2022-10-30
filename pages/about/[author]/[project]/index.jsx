import {createClient} from 'contentful';
import Project from "../../../projects/[slug]/index";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async() => {
    const res = await client.getEntries({content_type: "projects"})

    const paths = res.items.map(item => {
        return {
            params: {
                author: item.fields.slug,
                project: item.fields.slug,
            }
        }
    })

    return {paths, fallback: true}
}

export const getStaticProps = async({params}) => {
    const {items} = await client.getEntries({content_type: "projects", "fields.slug": params.project})
    
    return {props: {items}}
}


const AuthorCurrentProject = (items) => {
    return (
        <>
        <Project project={items.items}/>
        </>
    )
}

export default AuthorCurrentProject;