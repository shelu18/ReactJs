import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("div",{className:"App"},
React.createElement("div",{id:"second"},
React.createElement("h1",null,"Hello World")
)
);
console.log(heading);
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(heading);