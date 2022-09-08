import Link from "next/link";

export const BlogCard = ({ posts }) => {
  console.log(posts);
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-4 my-10">
      {/*{posts.map((post) => (*/}
      {/*  <div key={post.sys.id} className="p-6 bg-white rounded-xl">*/}
      {/*    <Link href={`/blog/${post.fields.slug}`}>*/}
      {/*      <a>*/}
      {/*        <div className="overflow-hidden">*/}
      {/*          <img*/}
      {/*            src={`${post.fields.featuredImage[0].secure_url}`}*/}
      {/*            className="w-full h-auto hover:scale-105 transition transition-all duration-200 ease-in-out"*/}
      {/*            alt="Sample Cover"*/}
      {/*          />*/}
      {/*        </div>*/}

      {/*        <h3*/}
      {/*          className="mt-6 leading-normal text-gray-800 group-hover:text-purple-400 font-semibold text-2xl lg:text-4xl line-clamp-3 transition translation-all duration-200 ease-in-out"*/}
      {/*          title="Lorem Ipsum is simply dummy text of the printing"*/}
      {/*        >*/}
      {/*          {post.fields.title}*/}
      {/*        </h3>*/}
      {/*      </a>*/}
      {/*    </Link>*/}

      {/*    <div className="mt-6">*/}
      {/*      <time*/}
      {/*        className="text-gray-600"*/}
      {/*        dateTime={new Date(post.sys.createdAt).toLocaleDateString()}*/}
      {/*      >*/}
      {/*        {new Date(post.sys.createdAt).toLocaleDateString()}*/}
      {/*      </time>*/}

      {/*      <p className="mt-6 leading-normal line-clamp-3 text-lg text-gray-600">*/}
      {/*        {post.fields.description}*/}
      {/*      </p>*/}
      {/*    </div>*/}

      {/*    <div>*/}
      {/*      {post.fields.tag.map((tag) => (*/}
      {/*        <span*/}
      {/*          key={tag}*/}
      {/*          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"*/}
      {/*        >*/}
      {/*          {tag}*/}
      {/*        </span>*/}
      {/*      ))}*/}
      {/*    </div>*/}

      {/*    <Link href={`/blog/${post.fields.slug}`}>*/}
      {/*      <a className="inline-block mt-6 text-purple-500 hover:text-purple-400 ">*/}
      {/*        Czytaj więcej*/}
      {/*      </a>*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  );
};
