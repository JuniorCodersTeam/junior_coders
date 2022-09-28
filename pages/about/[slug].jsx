import {createClient} from "contentful";
import Image from "next/image";

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

export async function getStaticProps({params}) {
    const {items} = await client.getEntries( {
        content_type: "author",
        "fields.slug": params.slug
    })
    console.log(items)
    return {props: {items}}
}


const Author = ({items}) => {
    console.log(items[0].fields)
    return (
        <>
        <div className="container author-container">

            <h1>O mnie</h1>

            <section className="author">
                <Image 
                    loader={() => items[0].fields.photo.fields.file.url }
                    src={items[0].fields.photo.fields.file.url}
                    alt={items[0].fields.photo.fields.description}
                    width={200}
                    height={200}  
                    className="photo"
                />

                <div className="author-content">
                    <p>{items[0].fields.about}</p>
                </div>
            </section>
        </div>
        </>
    )

}

export default Author