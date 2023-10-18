import React from "react";
import ReactDOM from "react-dom/client";
const heading = <h1>Namaste React</h1>;
const HeaderComp = () => {
  return (
    <div>
      {heading}
      <h2>Hello React!!</h2>
      <h3>Hello Brother </h3>
    </div>
  );
};
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(<HeaderComp />);
