
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

    const hours = document.createElement("ul");
    const hoursList ={
        Monday : '9:00 am - 6:00 pm',
        Tuesday : 'Closed',
        Wednesday : '9:00 am - 6:00 pm',
        Thursday : '9:00 am - 6:00 pm',
        Friday : '9:00 am - 6:00 pm',
        Saturday : '9:00 am - 6:00 pm',
        Sunday : '9:00 am - 6:00 pm',
    }
        for(const days in hoursList){
            console.log(days)
            const day = document.createElement("li");
            day.textContent=days +" "+ hoursList[days];
            hours.appendChild(day);
        }
            
        
    
    contentDiv.appendChild(hours)

    console.log("createFrontPage");
}
