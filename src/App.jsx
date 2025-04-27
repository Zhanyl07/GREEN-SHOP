import "./App.css";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="wrapper">
        <RouterProvider router={myRouter} />
      </div>
    </>
  );
}
export default App;
