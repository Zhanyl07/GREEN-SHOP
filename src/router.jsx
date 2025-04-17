import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from './pages/Home';
import Shopm from './pages/Shopm';
import Cart from "./pages/Cart";
import ShopingCartPage from "./pages/ShopingCartPage";
import ProductCheckout from "./pages/ProductCheckout";
import OrderModal from "./pages/OrderModal";
import AuthForm from "./auth/AuthForm";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";
import Post from "./components/Post/Post";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shopm /> },
      { path: "/cart", element: <Cart /> },
      { path: "/shopingcart", element: <ShopingCartPage /> },
      { path: "/productcheckout", element: <ProductCheckout /> },
      { path: "/ordermodal", element: <OrderModal /> },
      { path: "/categories", element: <Categories /> },
      { path: "/banner", element: <Banner /> },
      { path: "/about", element: <About /> },
      { path: "/post", element: <Post /> },
    ]
  },
  {
    path: "/login",
    element: <AuthForm />
  }
]);
