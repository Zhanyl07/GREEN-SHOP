import "./App.css";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="wrapper">
        <RouterProvider router={myRouter} />
      
        
      </div>
    </>
  );

}
export default App;