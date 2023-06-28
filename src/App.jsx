import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Themes from "./components/themes/Themes";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="resume" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
