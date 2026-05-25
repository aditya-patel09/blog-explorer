import { Link } from "react-router-dom";
import logo from "../assets/png-clipart-leaf-black-leaf-removebg-preview.png";
// import all data 
const tags = ["All", "AI", "Web Development", "LLM", "Deep Learning", "Python", "OpenAI"];
// this array use  for filter tag 
function Nav(props) {

  return ( // dull nav bar code 
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-4 py-3">

        <div className="flex items-center gap-3 w-full md:w-auto">

{/* navbar logo  */}
          <Link to="/"> 
            <img
              src={logo}
              alt="logo"
              className="w-9 h-9 md:w-10 md:h-10 object-contain flex-none"
            />
             
          </Link>
          {/* search bar  */}
          <div className="flex-1 md:w-72 lg:w-80 relative">
            <input
              type="text"
              placeholder="Search blog..."
              onChange={props.searchFilter}
              className="
                w-full
                h-10
                pl-10
                pr-4
                rounded-full
                border border-gray-300
                bg-gray-100
                text-black
                text-sm
                outline-none
                placeholder:text-gray-400
                focus:ring-2
                focus:ring-black
                transition-all
              "
            />

            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base">
              search
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-3">
{/* domain option */}
          <select
            onChange={props.domainFilter}
            className="
              w-full sm:w-40 md:w-44
              h-10
              px-2
              rounded-lg
              border border-gray-300
              bg-gray-100
              text-sm
              text-black
              outline-none
            "
          >
            <option value="all">All</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Web Development">Web Development</option>
          </select>

        </div>
      </div>

      <div className="
        flex
        items-center
        gap-2
        px-4
        py-2
        overflow-x-auto
        scrollbar-hide
        text-sm
        text-gray-600
        border-t
        border-gray-100
      ">
{/* tag option  */}
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => props.tagFilter(tag)}
            className="
              px-3
              py-1
              rounded-full
              border
              border-gray-300
              whitespace-nowrap
              hover:bg-black
              hover:text-white
              transition
              text-xs md:text-sm
            "
          >
            {tag}
          </button>
        ))}
      </div>

    </nav>
  );
}

export default Nav;