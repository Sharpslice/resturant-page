import createFrontPage from "./initialPageLoad.js";
import createMenuPage from "./menuPage.js";
import createAboutPage from "./aboutPage.js";
import "./style.css";
console.log("index.js working");

createFrontPage();
const Home = document.querySelector("#home")
const Menu = document.querySelector("#menu")
const About = document.querySelector("#about")
Home.addEventListener('click',(e)=>{
    const container =  document.getElementById("content");
    container.innerHTML = '';
    createFrontPage();
});
Menu.addEventListener('click',(e)=>{
    const container =  document.getElementById("content");
    container.innerHTML = '';
    createMenuPage();
});
About.addEventListener('click',(e)=>{
    const container =  document.getElementById("content");
    container.innerHTML = '';
    createAboutPage();
});

