import { useLoaderData } from "react-router-dom";
import Blog from "../../components/Blog/Blog";

const Blogs = () => {
    const blogs = useLoaderData();
  return (
    <div>
      <div className="p-8 text-center rounded-2xl mb-10">
        <h3 className="text-[2rem] font-bold text-dark font-playfair-display">All Blogs</h3>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center content-center">
        {
            blogs.map(blog=> <Blog key={blog.blogId} blog={blog}></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;
