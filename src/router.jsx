import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from './pages/Home'
import Shopm from './pages/Shopm'
import Cart from "./pages/Cart";
import ShopingCartPage from "./pages/ShopingCartPage";
export const myRouter = createBrowserRouter ([
    {
        path: "/",
    element: <Layout />,
    children: [
        {
        path: "/",
        element: <Home/>
        
      },
      {
        path: "/shop",
        element: <Shopm/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/shopingcart",
        element: <ShopingCartPage/>
      }
    ]

    }
]
)

