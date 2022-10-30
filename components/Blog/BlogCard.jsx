import Image from "next/image";
import { Button } from "../UI/Button";

export const BlogCard = ({ post }) => {
  const {
    title,
    slug,
    featureImage,
    shortDescription,
    data: date,
  } = post.fields;
  console.log(post.fields.author);
  const formattedData = new Date(date).toDateString();

  return (
    <div className="blog-card">
      <Image
        alt={featureImage.fields.title}
        src={`https:${featureImage.fields.file.url}`}
        width="384"
        height="288"
        className="blog-card--image"
        objectFit="cover"
        objectPosition="top"
      />
      <h2>{title}</h2>
      <p>{shortDescription}</p>
      <div className="blog-card--actions">
        <div className="blog-card--author">
          <Image
            alt={post.fields.author?.fields.photo.fields.description}
            src={`https:${post.fields.author?.fields.photo.fields.file.url}`}
            width="50"
            height="50"
          />
          <div>
            <p>{post.fields.author.fields.author}</p>
            <span>{formattedData}</span>
          </div>
        </div>
        <Button current="blog" link={slug} />
      </div>
    </div>
  );
};
