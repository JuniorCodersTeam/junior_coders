import AboutUs from "../../components/layout/AboutUs/AboutUs";
import ContentService from "../../lib/contentful";

export async function getStaticProps() {
  const authors = await new ContentService("author").getEntriesByType();

  return { props: { authors }, revalidate: 30 };
}

const About = ({ authors }) => {
  return <AboutUs author={authors} />;
};

export default About;
