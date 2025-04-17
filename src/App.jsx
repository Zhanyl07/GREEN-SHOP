import "./App.css";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router";
// import Shopping from './ShoppingCart/Shopping';


function App() {
  // const Shopping = () => {
  return (
    <>
      <div className="wrapper">
        <RouterProvider router={myRouter} />
        {/* <div className="App">
          <Shopping />
        </div> */}
        
      </div>
    </>
  );

}
export default App;