import "./style.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import ProductLayout from "./components/ProductLayout/ProductLayout";
import Counter from "./components/Counter/Counter";
import Comment from "./components/Comment/Comment";
import Error from "./components/Error/Error";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Image from "./components/Image/image";
import ComponentA from "./components/PropDrilling/ComponentA";
const AppLayout = () => {
  return (
    <>
      <Header />
        {/* if(path==="/" return <Home/>)
        if(path==="/counter" return <Counter/>)
        if(path==="/comment" return <Comment/>)  */}
      <Outlet/>
      <Footer />
    </>
  );
};
const Home = () =>{
  return (
    <>
      <HeroSection/>
      <ProductLayout/>
    </>
  )
}
const routes = createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/counter",
      element:<Counter/>
    },
    {
      path:"/comment",
      element:<Comment/>
    },
    {
      path:"/products",
      element:<ProductLayout/>
    },
    {
      path:"/products/:id",
      element:<ProductDetails/>
    },
    {
      path:"/image",
      element:<Image/>
    },
    {
      path: "/props-drilling",
      element:<ComponentA/>
    }
  ],
  errorElement:<Error/>
},

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes}/>);
