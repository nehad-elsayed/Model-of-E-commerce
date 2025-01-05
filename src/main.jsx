import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//*Important**Notes**

//*--we use file main.jsx to ATTACh index.html with AppComponent

//*1- Inside main.jsx file we use (createRoot method from ReactDOM) to create root element in html then render
//*  App component inside it By (render method).

//*2-React uses strict mode here to avoid bad behavior of js

//*3-we use path => (.jsx) to make the extension in vs code compelete with me automatically

//*4-writing jsx code enables me to write html inside js but it changes many things like class => becomes className
//* and for => becomes htmlFor then the modules ESbulid(dependences),RollUp(bundling) convert this
//* code to HTML to make the browser understand it.

//*5-To write js inside html we should use {} "binding"

//*6-To render any component it must be inside jsx selector 

//*7-Render component :it means display component (Run the return Statement code)

//*8-Re-render : it means to display the component after making update with setState  (make the update appears in Ui)

//*9-hooks appeared in version 16.8 of React => (it helped us to use rfc instead of rcc)

//*10-useSate is a hook that we use to store any state (Data) at the !Function Component! =>
//* !!useState saves the previus value of the variable
//* !! we can change the value of the variable at the component only by using setSate =>
//* because it changes the value of the variable and also re-render the component.