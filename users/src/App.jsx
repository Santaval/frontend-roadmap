import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Login from "./views/Login";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./components/Footer";
import Projects from "./views/Projects";
import Project from "./views/Project";

function App() {
  return (
    <>
      <NextUIProvider>
        <BrowserRouter>
          <Navigation />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:key" element={<Project />} />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </NextUIProvider>
    </>
  );
}

export default App;
