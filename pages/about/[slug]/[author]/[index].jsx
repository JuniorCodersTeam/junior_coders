import { Project} from "../../../projects/[slug]/index";
import { createClient } from "contentful";
import { useRouter } from "next/router";

// const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
// });

// export async function getStaticProps(context) {
//     console.log(context);

//     return {
//       // Passed to the page component as props
//         props: { post: {context} },
//     }
// }

// export const getStaticPaths = async() => {
//     const res = await client.getEntries({content_type: "projects"})

//     console.log("res indexjsx w [author]", res.items)
//     //res.items - wszystkie projekty pobiera poprawnie - sprawdzone consollogiem
//     const paths = res.items.map(item => {
// // tutaj dwa params maą być - patrz dokumentacja - tylko dobrze rozpisac z res.items
//         return {
//             params: {
//                 author: item.fields.slug,
//                 slug: item.fields.slug,
//             }
//         }
//     })
// console.log("ścieżki indexjsx w [author]", paths)
//     //ścieżki pobiera dobre - sprawdzone consolelogiem
//     return {paths}
// }

// export const getStaticProps = async({params}) => {
//     const {items} = await client.getEntries({content_type: "projects", "fields.slug": params.slug})
    
//     console.log("ten projekt potrzeba", items)
//     return {props: {items}}
// }

// nie działa, nie włącza bo powiela się niby ścieżka
// zapis [index].jsx --> wyświetla, ale 404

const AuthorCurrentProject = () => {

        return (
            <>
            <div>jestem</div>
            </>
        )
    }
    
    export default AuthorCurrentProject