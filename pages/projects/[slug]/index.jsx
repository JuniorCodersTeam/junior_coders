import { createClient } from "contentful";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "projects",
  });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { items: project } = await client.getEntries({
    content_type: "projects",
    "fields.slug": params.slug,
  });

  return { props: { project }, revalidate: 30 };
};

const Project = ({ project }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>{<Skeleton count={33}/>}</div>;
  }

  const { title, slug, image, description, technologies } = project[0].fields;

  const path = router.asPath.replaceAll("/", " ").split(" ").slice(1);
  return (
    <>
      <div className="projects-container">
        <div className="path-links">
          <Link href="/">
            <span className="path-link">home</span>
          </Link>
          <BsChevronRight className="back-icon" />
          <span className="path-link" onClick={() => router.back()}>
            {path[0]}
          </span>
          <BsChevronRight className="back-icon" />
          <span className="path-link" onClick={() => router.reload()}>
            {path[1]}
          </span>
        </div>
        <div className="project-detail-container">
          <div className="project-detail-image">
            <Image
              alt={image.fields.title}
              src={`https:${image.fields.file.url}`}
              layout="fill"
              objectFit="cover"
            />
            <h3 className="project-h3">{title}</h3>
          </div>
          <div className="project-detail-info">
            <p className="project-p">{description}</p>
            <h4 className="project-h4">Technologie:</h4>
            <p className="project-p">{technologies}</p>
            <div className="project-detail-buttons">
              <Link href="/projects">
                <span className="project-detail-link btn">
                  Projekt Live
                  <BsArrowRightShort className="arrow-icon" />
                </span>
              </Link>
              <Link href="/projects">
                <span className="project-detail-link btn">
                  GitHub
                  <BsArrowRightShort className="arrow-icon" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;


