import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Finuxwhitepaper from "./Pages/Finuxwhitepaper";
import Whitepapersupport from "./Pages/Whitepapersupport";

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="bg-gray-100 dark:bg-black">
              <Home />
            </div>
          }
        />
        <Route
          exact
          path="/finuxwhitepaper"
          element={
            <div className="bg-gray-100 dark:bg-black">
              <Finuxwhitepaper />
            </div>
          }
        />
        <Route
          exact
          path="/Whitepapersupport"
          element={<Whitepapersupport />}
        />
      </Routes>
    </>
  );
}

export default App;
