import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";  
import BlogDetail from "./pages/blogDetail";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
// import all important component
function App() { // create function for app component 
    const [search, setSearch] = useState(""); //  use react.useState for re-render if user search any thing ;
  const [domain, setDomain] = useState("all");// similarly domain filter
  const [tag, setTag] = useState("All");// similarly tag filter 

  function searchFilter(e) {
    setSearch(e.target.value); // use e.target value:- user type anything they catch and store in search variable 
  }

  function domainFilter(e) {
    setDomain(e.target.value); // domain value catch 
  }

  function tagFilter(value ) {// tag value catch 
    setTag(value);
  }
  
  console.log(tag)
  return (
    <div className="min-h-screen flex flex-col">
               <Nav
        searchFilter={searchFilter}
        domainFilter={domainFilter} // give prop of all function in navbaer 
        tagFilter={tagFilter}
      />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home   search={search}
                domain={domain}
                tag={tag} />} /> 
          {/* render home.jsx on path "/" */}
          
          <Route path="/blog/:id" element={<BlogDetail />} />
          {/* render blogDetail on path /blog/:id */}
          <Route
            path="*"
            element={<h1>404 Page Not Found</h1>}
          />
          {/* for invalid path:-  404 page not found   */}
        </Routes>
      </div>

      <Footer tagFilter={tagFilter}  />
      {/* footer div  */}
    </div>
  );

}
export default App;