import Image from "next/image";
import { Button } from "../UI/Button";

export const ProjectCard = ({ project }) => {
    const {
        title,
        slug,
        image,
        description,
        technologies,
        } = project.fields;


    return (
    <div className="project-card">
        <Image
            alt={image.fields.title}
            src={`https:${image.fields.file.url}`}
            width="384"
            height="288"
            className="blog-card--image"
            objectFit="cover"
            objectPosition="top"
        />
        <div className="title-bar">
            <h2>{title}</h2>
        </div>
        
        <p>{description}</p>
        <div className="technologies">
            <h3>Technologie:</h3>
            <p>{technologies}</p>
        </div>
        <div className="project-card--action">
            <Button current="projects" link={slug} />
        </div>
    </div>
    );
};