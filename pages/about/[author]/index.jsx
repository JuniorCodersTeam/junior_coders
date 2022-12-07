import Image from "next/image";
import { Button } from "../../../components/UI/Button";
import ContentService from "../../../lib/contentful";

export const getStaticPaths = async () => {
  const paths = await new ContentService("author").getAllPaths("author");

  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  const [author, projects] = await Promise.all([
    new ContentService("author").getPostBySlug(params.author),
    new ContentService("projects").getEntriesByType(),
  ]);

  const foundProjects = projects.filter(
    (el) => el.fields?.author.fields.author === author[0].fields.author
  );

  return { props: { author, projects, foundProjects }, revalidate: 30 };
}

const Author = ({ author, foundProjects }) => {
  return (
    <>
      <div className="author-bg">
        <div className="container author-container">
          <h1>{author[0].fields.author}</h1>

          <section className="author">
            <Image
              loader={() => author[0].fields.photo?.fields.file.url}
              src={author[0].fields.photo?.fields.file.url}
              alt={author[0].fields.photo?.fields.description}
              width={200}
              height={200}
              className="photo photo-box"
            />

            <div className="author-content">
              <p>{author[0].fields.about}</p>
            </div>

            <div className="project-cards">
              {foundProjects.map((project) => (
                <div key={project.fields.order} className="project-card">
                  <Image
                    alt={project.fields.title}
                    src={`https:${project.fields.image.fields.file.url}`}
                    width="384"
                    height="288"
                    className="blog-card--image"
                    objectFit="cover"
                    objectPosition="top"
                  />
                  <div className="title-bar">
                    <h2>{project.fields.title}</h2>
                  </div>

                  <p>{project.fields.description}</p>
                  <div className="technologies">
                    <h3>Technologie:</h3>
                    <p>{project.fields.technologies}</p>
                  </div>
                  <div className="project-card--action">
                    <Button
                      current={`about/${author[0].fields.slug}`}
                      link={project.fields.slug}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Author;
