import "./App.css";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router";
// import Shopping from './ShoppingCart/Shopping';
import 'bootstrap/dist/css/bootstrap.min.css';

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