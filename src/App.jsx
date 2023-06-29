import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Themes from "./components/themes/Themes";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<About />} />
        <Route path="/kris-web-dev/resume" element={<Resume />} />
        <Route path="/kris-web-dev/portfolio" element={<Portfolio />} />
        <Route path="/kris-web-dev/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
