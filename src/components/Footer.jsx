const tags = ["All", "AI", "Web Development", "LLM", "Deep Learning", "Python", "OpenAI"];
function Footer(props) {
  return (
    <footer className="w-full bg-black text-white mt-10">
      
      <div className="max-w-7xl mx-auto px-5 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-800 pb-8">
          <div>
            <h2 className="text-2xl font-bold">Blog Explorer</h2>

            <p className="text-gray-400 text-sm mt-3 leading-6">
              Discover blogs on AI, Web Development, LLMs,
              Python, OpenAI, and modern technology trends.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Trending Blogs
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Categories
              </li>

              <li className="hover:text-white cursor-pointer transition">
                About
              </li>
            </ul>
          </div>

          {/* TAGS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Popular Tags
            </h3>

            <div className="flex flex-wrap gap-2">
              {
                tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    px-3
                    py-1
                    text-xs
                    rounded-full
                    bg-gray-800
                    text-gray-300
                    hover:bg-white
                    hover:text-black
                    transition
                    cursor-pointer
                    
                  "
                   onClick={() => props.tagFilter(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-sm text-gray-400">

          <p>
            © 2026 BlogSphere. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer transition">
              Privacy
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Terms
            </span>

            <span className="hover:text-white cursor-pointer transition">
              Contact
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;