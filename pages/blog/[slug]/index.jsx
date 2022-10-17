import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { RICHTEXT_OPTIONS } from "../../../components/contentfulRichText";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "blogPosts" });

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
  const { items: blog } = await client.getEntries({
    content_type: "blogPosts",
    "fields.slug": params.slug,
  });
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
