import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { blogId, image, blogTitle, publishDate, readTime } = blog;
  return (
    <div style={{ boxShadow: "0 0 20px #86868633" }} className="rounded-2xl p-4 flex flex-col justify-between">
      <div>
        <img
          className="rounded-2xl"
          src={image}
          alt={blogId}
        />
      </div>
      <h1 className="font-bold text-xl mt-4">{blogTitle}</h1>
      <div className="flex justify-between items-center gap-2 flex-wrap mt-5">
        <p className="bg-slate-100 px-2 py-1 rounded-lg text-dark-70">{publishDate}</p>
        <p className="bg-slate-100 px-2 py-1 rounded-lg text-dark-70">{readTime}</p>
      </div>
      <hr className="border-b border-b-dark-70 my-5" />
      <button className="btn text-base bg-transparent border-[#13131349] rounded-full">Read This Blog</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
