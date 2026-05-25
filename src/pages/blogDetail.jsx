import { useParams, useNavigate } from "react-router-dom";
import blogs from "../data/data.json";
import ReactMarkdown from "react-markdown";

function BlogDetail() {
  const { id } = useParams(); // id store from url 
  console.log("ID:", id);
  const navigate = useNavigate(); // navigate use render on correct matching path 
  const blog = blogs.find((b) => String(b.id) === String(id)); // find by id 

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Blog not found
      </div> // blog not found then they work 
    );
  }

  return (
    <div className="min-h-screen bg-white">
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-gray-300 hover:text-black transition"
        >
           Back 

        </button> 
        {/* use back button for go to previous page  */}
        {/* now render all data  */}
        <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
          {blog.title}
        </h1>

       <div className="mt-6 flex justify-center px-2">
  <img
    src={blog.image}
    alt={blog.title}
    className="
      w-full
      max-w-4xl
      h-auto
      object-contain
      rounded-xl
      bg-gray-100
    "
  />
</div>


        <p className="mt-6 text-gray-700 text-base sm:text-lg leading-7">
          {blog.summary || blog.description || "No description available."}
        </p>


        <div className="mt-5 text-sm text-gray-500 flex flex-wrap gap-3 items-center">
          <span>{blog.author || "Unknown Author"}</span>
          <span>•</span>
          <span>{blog.date || "No Date"}</span>
          <span>•</span>
          <span className="text-blue-600">{blog.domain || blog.category}</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {blog.tags?.length ? (
            blog.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))
          ) : (
            <span className="text-xs text-gray-400">No tags</span>
          )}
        </div>

        <hr className="my-8 border-gray-200" />

       <div className="prose prose-lg max-w-none">
  <ReactMarkdown>
    {blog.content}
  </ReactMarkdown>
 {/* reactMarkdown is used to render markdown content properly.
 it converts markdown syntax like headings, bold text, into HTML elements. */}
</div>

      </div>
    </div>
  );
}

export default BlogDetail;