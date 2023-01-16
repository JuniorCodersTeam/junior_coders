import Project from "../../../projects/[slug]/index";
import ContentService from "../../../../lib/contentful";

export const getStaticPaths = async () => {
  const res = await new ContentService("projects").getEntriesByType();

  const paths = res.map((item) => {
    return {
      params: {
        author: item.fields.slug,
        project: item.fields.slug,
      },
    };
  });
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const items = await new ContentService("projects").getPostBySlug(
    params.project
  );

  return { props: { items }, revalidate: 30 };
};

const AuthorCurrentProject = (items) => {
  return (
    <>
      <Project project={items.items} />
    </>
  );
};

export default AuthorCurrentProject;
