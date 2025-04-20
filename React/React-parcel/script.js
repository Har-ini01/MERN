import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"

//React Element
const paragraphElement = React.createElement("p", null, "Hello React");

//JSX -> HTML OR XML like syntax
//JSX --> BABEL --> React.createElement() --> JSON Object --> HTML
const paraElement = <p>Hello World JSX</p>;
console.log(paraElement); //JSON Object

//Component
const Header = () => {
  // return <p>Hello</p>
  // return <div>
  //     <p>Hello</p>
  //     <p>Hello World</p>
  // </div>
  return (
    <>
    <p className="para">Hello World-Header</p>
    <p>Hello World-Header</p>
    <p>Hello World-Header</p>
    <p>Hello World-Header</p>
    <p>Hello World-Header</p>
    </>
  );
};


const Footer = () => {
  return (
    <>
    <p>Hello World-Footer</p>
    <p>Hello World-Footer</p>
    <p>Hello World-Footer</p>
    <p>Hello World-Footer</p>
    <p>Hello World-Footer</p>
    </>
  );
};

//Component Composition
const Body = () => {
  return(
    <>
    <Header/>
    <Footer/>
  </>
  )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>); //Way-1
// root.render(<Header></Header>) //Way-2
// root.render(<Header/>) //Way-3
