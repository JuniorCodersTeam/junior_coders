import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RICHTEXT_OPTIONS } from "../../../components/contentfulRichText";
import ContentService from "../../../lib/contentful";

export const getStaticPaths = async () => {
  const paths = await new ContentService("blogPosts").getAllPaths();

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const blog = await new ContentService("blogPosts").getPostBySlug(params.slug);
  return { props: { blog }, revalidate: 30 };
};

const PostBlog = ({ blog }) => {
  const { fields } = blog[0];
  return (
    <div className="blog-post">
      <h1>{fields.title}</h1>
      <Image
        className="blog-post__image"
        alt={fields.title}
        src={`https:${fields.featureImage?.fields.file.url}`}
        layout="responsive"
        objectFit="contain"
        width={fields.featureImage?.fields.file.details.image.width}
        height={fields.featureImage?.fields.file.details.image.height}
      />
      <div className="blog-post-description">
        {documentToReactComponents(fields.description, RICHTEXT_OPTIONS)}
      </div>
    </div>
  );
};

export default PostBlog;
