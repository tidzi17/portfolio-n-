import { BrowserRouter } from "react-router-dom";
import About from "./sections/about";
import Contact from "./sections/contact";
import Home from "./sections/home";
import Portfolio from "./sections/portfolio";
import Navbar from "./components/navbar";
import CustomCursor from "./components/cursor";


export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <CustomCursor />
    <>
    <Home />
    <About />
    <Portfolio />
    <Contact />
    <footer className="bg-zinc-800 h-32 flex items-center justify-center"><p className="text-white">&copy;Copyright 2024 All rights reserved</p></footer>
    </>
    </BrowserRouter>
  )
}
