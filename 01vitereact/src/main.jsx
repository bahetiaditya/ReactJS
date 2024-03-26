import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function Myapp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  );
}

const ReactElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: "_blank",
  },
  children: "click me to visit google",
};
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);


const anotherUser = 'reactjs learning'

const reactElement = React.createElement(
  "a",
  { href: 'https://google.com', target: "_blank" },

  'click me to visit google',
  anotherUser,
);

ReactDOM.createRoot(document.getElementById("root")).render(
  //  <App />
  //   <Myapp />
  // anotherElement,
  reactElement
);
