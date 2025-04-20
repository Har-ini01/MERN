import "./style.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import ProductLayout from "./components/ProductLayout/ProductLayout"
const AppLayout = () => {
  return(
    <>
    <Header />
    <HeroSection />
    <ProductLayout/>
    <Footer />
  </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
