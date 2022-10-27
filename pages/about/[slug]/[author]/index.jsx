import AuthorCurrentProject from "./[index]";
import {createClient} from 'contentful';
import Project from "../../../projects/[slug]/index";


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async() => {
    const res = await client.getEntries({content_type: "projects"})

    console.log("res indexjsx w [author]", res.items)
    //res.items - wszystkie projekty pobiera poprawnie - sprawdzone consollogiem
    const paths = res.items.map(item => {
// tutaj dwa params maą być - patrz dokumentacja - tylko dobrze rozpisac z res.items
        return {
            params: {
                author: item.fields.slug,
                slug: item.fields.slug,
            }
        }
    })
console.log("ścieżki indexjsx w [author]", paths)
    //ścieżki pobiera dobre - sprawdzone consolelogiem
    return {paths, fallback: true}
}


export const getStaticProps = async({params}) => {
    const {items} = await client.getEntries({content_type: "projects", "fields.slug": params.author})
    
    console.log("ten projekt potrzeba", items)
    return {props: {items}}
}



const Co = (items, paths) => {
    console.log("items", items)
    // console.log("paths", paths)
    return (
        <>
        <div>jestem</div>
        <Project project={items.items}/>
        </>
    )
}

export default Co;