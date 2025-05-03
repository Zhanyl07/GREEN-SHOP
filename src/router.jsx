import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from './pages/Home';
import Shopm from './pages/Shopm';
import Cart from "./pages/Cart";
import Search1 from "./pages/Search1";
import AuthForm from "./auth/AuthForm";
import ShopingCartPage from "./pages/ShopingCartPage";
import ProductCheckout from "./pages/ProductCheckout";
import OrderModal from "./pages/OrderModal";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";
import Post from "./components/Post/Post";
import Profile from "./components/Profile/Index";
import Account from "./pages/Account1";
import WishList from "./components/WishList/Wishlist";
import LoginModal from './pages/LoginModal';
import RegisterModal from "./pages/RegisterModal";
import BlogsGREEN from "./pages/BlogsGREEN";
import BlogDetails from "./pages/BlogDetails";
import { path } from "framer-motion/client";
import Plants from "./pages/Plants";
import Page2 from "./pages/Page2";
import Page4 from "./pages/Page4";
import Page3 from "./pages/Page3";
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
      { path: "/login", element: <AuthForm /> },
      { path: "/profile", element: <Profile /> },
      { path: "/account", element: <Account /> },
      { path: "/wishlist", element: <WishList /> },
      { path: '/loginmodal', element: <LoginModal /> },
      { path: '/registermodal', element: <RegisterModal /> },
      { path: "/register", element: <AuthForm /> },
      { path: "/blogs", element: <BlogsGREEN /> },
      {
        path: "/blog/:id",
        element: <BlogDetails/>
      },
      {
        path: "/search",
        element: <Search1/>
      },
      {
      path: "/plantscare",
      element: <Plants/>
      },
      { path: "/page2", element: <Page2 /> },
      { path: "/page3", element: <Page3 /> },
      { path: "/page4", element: <Page4 /> },
    ]
  }
]);