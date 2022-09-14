import AboutUs from "../../components/layout/AboutUs/AboutUs";
import {createClient} from "contentful";

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    });
    const {items: authors} = await client.getEntries({content_type: "author"})
    
    return {props: {authors}}
}


const About = ({authors}) => {

    return (
        <AboutUs author={authors}/>
    );
};

export default About;