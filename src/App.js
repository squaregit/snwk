import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Pages/Footer";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";

import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import Product from "./components/Pages/Product";






// import { Product } from "./components/Pages/Product";



// import Product, { Animation } from "./components/Pages/Animation"

function App() {

  return (
    <>
      <Router>
        <NavBar/>

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/animation" element={<Animation/>} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product/>} />
           

          </Routes>

        </div>

        <Footer />

      </Router>
    </>
  );
}

export default App;
