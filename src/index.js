import React from "react";
import ReactDom from "react-dom/client";

const element = document.getElementById("root");

const root = ReactDom.createRoot(element);

const App = () => {
    return <h1>Hello World this is my first react </h1>;
};

root.render(<App />);
