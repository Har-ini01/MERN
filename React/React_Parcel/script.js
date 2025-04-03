import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const paragraphElement = React.createElement("p", null, "Hello World React");

//JSX -> HTML or XML like syntax
//https://babeljs.io/
//JSX -> Babel -> React.createElement() -> JSON -> HTML
const paraElement = <p>Hello World JSX</p>;
console.log(paraElement); //JSON Object

//Components
//creating a functional component
// const Header = () => {
//     return <p>Header Component</p>
// }
//Render a functional component
// const root = ReactDOM.createRoot(document.getElementById("root"));
//Way-1 -> root.render(Header());
//Way-2 -> root.render(<Header></Header>);
//Way-3 -> root.render(<Header/>);

const Header = () => {
  return (
    <div>
      {4 + 4}
      <p>Hello React</p>
      <p>Hello New</p>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <p>Hello World</p>
      <Header/>
      <Footer/>
    </>
  )
}

const Footer = () => {
  return (
    <>
      <p>Hello World</p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Body());
