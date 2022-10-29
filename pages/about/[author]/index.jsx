import { createClient } from "contentful";
import Image from "next/image";
import { Button } from "../../../components/UI/Button";
import Link from "next/link";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "author" });

  const paths = res.items.map((item) => {
    return {
      params: {
        author: item.fields.slug,
      },
    };
  });

  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  const { items: author } = await client.getEntries({
    content_type: "author",
    "fields.slug": params.author,
  });

  const { items: projects } = await client.getEntries({
    content_type: "projects",
  });

  const foundProjects = projects.filter(
    (el) => el.fields?.author.fields.author == author[0].fields.author
  );

  return { props: { author, projects, foundProjects } };
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
              className="photo"
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
                    <Link href={project.fields.slug}>
                      <Button
                        current={author[0].fields.slug}
                        link={project.fields.slug}
                      />
                    </Link>
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
