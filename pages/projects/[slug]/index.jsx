import { useRouter } from "next/router";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";
import LoadingSkeleton from "../../../components/LoadingSkeleton";

import "react-loading-skeleton/dist/skeleton.css";
import ContentService from "../../../lib/contentful";

export const getStaticPaths = async () => {
  const paths = await new ContentService("projects").getAllPaths();

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const project = await new ContentService("projects").getPostBySlug(
    params.slug
  );

  return { props: { project }, revalidate: 30 };
};

const Project = ({ project }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingSkeleton />;
  }

  const { title, image, description, technologies, liveLink, githubLink } =
    project[0].fields;
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
              {liveLink ? (
                <Link href={liveLink}>
                  <span className="project-detail-link btn">
                    Projekt Live
                    <BsArrowRightShort className="arrow-icon" />
                  </span>
                </Link>
              ) : (
                <Link href="/projects">
                  <span className="project-detail-link btn">
                    Projekt Live
                    <BsArrowRightShort className="arrow-icon" />
                  </span>
                </Link>
              )}
              {/* może dodać jeszcze jakiś komunikat jakby nie było githubLink, że zapraszamy do kontaktu w tej sprawie? */}
              {githubLink ? (
                <Link href={githubLink}>
                  <span className="project-detail-link btn">
                    GitHub
                    <BsArrowRightShort className="arrow-icon" />
                  </span>
                </Link>
              ) : (
                <Link href="/projects">
                  <span className="project-detail-link btn">
                    GitHub
                    <BsArrowRightShort className="arrow-icon" />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
