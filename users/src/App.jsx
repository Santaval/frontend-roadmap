import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
