import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogCard(props) {
  const navigate = useNavigate();

  const blogs = props.blogs || [];
  const [visibleCount, setVisibleCount] = useState(6); // use for make limited scroll bar initially only  card show
  useEffect(() => {
    setVisibleCount(6);
  }, [blogs]); // use effect use for not render always ig blogs change then they function work 

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, blogs.length));
  }; // loadmore function work 

  const visibleBlogs = blogs.slice(0, visibleCount); // cut upto visiblecount number 

  if (!blogs.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        Blog Not Available 
      </div>
    );
  }

  return (
    <div className="w-full">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
{/*  render all blog card form  */}
        {visibleBlogs.map((item) => ( 
          <div
            key={item.id}
            className="
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-sm
              hover:shadow-lg
              transition-all
              duration-300
              border border-gray-200
              cursor-pointer
            "
            onClick={() => navigate(`/blog/${item.id}`)}
          >

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">

              <h2 className="text-lg md:text-xl font-semibold text-black">
                {item.title}
              </h2>

              <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                {item.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-xs text-gray-500">
                {item.date}
              </p>

            </div>
          </div>
        ))}
      </div>
{/*  load more option provide  */}
      {visibleCount < blogs.length && (
        <div className="flex justify-center py-6 px-4">
          <button
            onClick={loadMore}
            className="
              px-6 py-3
              bg-black text-white
              rounded-lg
              hover:bg-gray-800
              active:scale-95
              transition
              w-full sm:w-40
              touch-manipulation
              cursor-pointer
              select-none
            "
          >
            Load More
          </button>
        </div>
      )}

    </div>
  );
}

export default BlogCard;