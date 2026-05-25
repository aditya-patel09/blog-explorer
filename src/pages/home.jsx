import BlogCard from "../components/BlogCard";
import { useMemo} from "react";
import blogs from "../data/data.json";
//import all component 
function Home({search,domain, tag}) { // home function
  const filterItem = useMemo(() => {
    return blogs.filter((blog) => { // filter function work:- useMemo stores the filtered result in memory
// so filtering does not run again on every render..// 
      const matchSearch =
        search.trim() === "" ||  // trim use if user give initially space them trim function  delete space then equality check 
        blog.title.toLowerCase().includes(search.toLowerCase()) || // in lower case all check 
        blog.author.toLowerCase().includes(search.toLowerCase());

      const matchDomain =
      blog.domain.toLowerCase() === domain.toLowerCase(); // if nothing choice in domain then "all" choice

      const matchTag = // tag match
        tag === "All" ||
        blog.tags.some((t) => t.toLowerCase() === tag.toLowerCase());

      return matchSearch && matchDomain && matchTag; // return filter array which have all property 
    });
  }, [search, domain, tag]); // when search domain tag change then filter function work 

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Nav
        searchFilter={searchFilter}
        domainFilter={domainFilter} // give prop of all function in navbaer 
        tagFilter={tagFilter}
      /> */}
          <div className="flex-1 pt-4">
      <BlogCard blogs={filterItem} /> 
      {/* // five all filter item in blog card */}
    </div>
    </div>
  );
}

export default Home;