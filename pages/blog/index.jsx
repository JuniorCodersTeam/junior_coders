import { BlogCard } from "../../components/Blog/BlogCard";
import ContentService from "../../lib/contentful";

export async function getStaticProps() {
  const posts = await new ContentService("blogPosts").getEntriesByType();

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
