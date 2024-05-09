import { Button } from "./components/ui/button";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="mx-16">
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
