// import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import App from "../views/app";

const app = new App({
  button: document.querySelector("#openSidebar"),
  content: document.querySelector("#main"),
  drawer: document.querySelector("#sidebar"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
