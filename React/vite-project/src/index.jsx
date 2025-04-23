import "./style.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import ProductLayout from "./components/ProductLayout/ProductLayout";
import Counter from "./components/Counter/Counter";
import Comment from "./components/Comment/Comment";
const AppLayout = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductLayout />
      <Counter />
      <Footer />
      {/* <Comment/> */}
    </>
  );
};
const router = createBrowserRouter()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
