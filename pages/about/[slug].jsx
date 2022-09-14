import {createClient} from "contentful";

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
    console.log(paths)
    return {paths, fallback: false}
}

export async function getStaticProps() {
    const {items: authors} = await client.getEntries({content_type: "author"})
    
    return {props: {authors}}
}

const Author = ({authors}) => {

    return (
        <div> dupa </div>
    )

}

export default Author