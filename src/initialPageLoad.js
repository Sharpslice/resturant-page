
import dryage from "./img/dryage.png";
export default function createFrontPage(){
    const contentDiv = document.getElementById("content");
    const titleDiv = document.createElement('div');
    titleDiv.textContent="David's Dry Aged Meats";
    contentDiv.appendChild(titleDiv);

    const subTitleSpan = document.createElement('span');
    subTitleSpan.classList.add("subtitle");
    subTitleSpan.textContent="Food so ddam good";
    contentDiv.append(subTitleSpan);

    const frontImg = new Image(100,200);
    frontImg.src = dryage;
    contentDiv.appendChild(frontImg);

    const subText = document.createElement('span');
    subText.textContent = "Our meats are so dry but is sure to get your mouth watering";
    subText.classList.add('subtext');
    contentDiv.appendChild(subText);
    console.log("createFrontPage");
}
