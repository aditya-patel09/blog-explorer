import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";  
import BlogDetail from "./pages/blogDetail";
import Footer from "./components/Footer";
// import all important component
function App() { // create function for app component 
  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} /> 
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

      <Footer />
      {/* footer div  */}
    </div>
  );
}

export default App;