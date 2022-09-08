import Link from "next/link";
import Image from "next/image";

export const BlogCard = ({ post }) => {
  console.log(post);
  const { title, slug, featureImage } = post.fields;
  console.log({ featureImage });
  return (
    <div className="blog-card">
      <div>
        <Link href={`blog/${slug}`}>
          <a>
            <div>
              <h1>{title}</h1>
              <div className="wrapper-image-test">
                <Image
                  src={`https:${featureImage.fields.file.url}`}
                  layout="fill"
                />
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};
