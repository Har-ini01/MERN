import "./style.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import ProductLayout from "./components/ProductLayout/ProductLayout";
import Counter from "./components/Counter/Counter";
import Error from "./components/Error/Error";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Image from "./components/Image/Image"
import ComponentA from "./components/PropDrilling/ComponentA";
import UserContext from "./store/userStore";
import Cart from "./components/Cart/Cart";
import UserStore from "./store/userStore";
import Contact from "./components/Contact/Contact";
import CartProvider from "./store/CartStore";
import React, { lazy, Suspense } from "react";
const Comment = lazy(() => import("./components/Comment/Comment"));

// Component Compostion - Calling a Function Component inside a Other Functional Component

const AppLayout = () => {
  return (
    <>
      <CartProvider>
        <UserStore.Provider value={{ name: "Hello" }}>
          <Header />
          <Outlet />
          <Footer />
        </UserStore.Provider>
      </CartProvider>
    </>
  );
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductLayout />
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/comment",
        element: (
          <Suspense>
            <Comment />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: <ProductLayout />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/images",
        element: <Image/>,
      },
      {
        path: "/componentA",
        element: <ComponentA />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);