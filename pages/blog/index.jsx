import { createClient } from "contentful";
import { BlogCard } from "../../components/Blog/BlogCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const { items: posts } = await client.getEntries({
    content_type: "blogPosts",
  });

  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}

const blog = ({ posts }) => {
  return (
    <div className="blog-container">
        <h2 className="projects-title">Blog</h2>
        <div className="blog">
        {posts.map((post) => (
          <BlogCard post={post} key={post.sys.id} />
        ))}
      </div>
    </div>
    
  );
};

export default blog;
