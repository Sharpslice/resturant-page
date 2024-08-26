import burgerking1 from './img/burgerking1.jpg';
import burgerking2 from './img/burgerking2.jpg';
import burgerking3 from './img/burgerking3.jpg';
import burgergif from './img/burgergif.gif';
import burgerCoupon from './img/burgerCoupon.png';
import burgerApp from './img/burgerApp.png';
import burgerRecruit from './img/burgerRecruit.png'; 
import chevronRight from './icons/chevron-right.svg';
import chevronLeft from './icons/chevron-left.svg';
import circle from './icons/new-moon.png';
let currentIndex = 0;
export default function createFrontPage(){
    const contentDiv = document.getElementById("content");
    const header= document.querySelector("header");

    

    const imagesDiv = document.createElement("div");
    const imagesInnerDiv = document.createElement("div");
    imagesInnerDiv.classList.add("imagesInnerContainer")
    imagesDiv.classList.add("imagesContainer")

    const imageSlides = document.createElement("div");
    imageSlides.classList.add('slides');

    const leftBtn = document.createElement("button");
    const chevLeft = document.createElement("img");
    chevLeft.src = chevronLeft;
    chevLeft.width="100";
    chevLeft.height="50";

    leftBtn.appendChild(chevLeft);
    imagesInnerDiv.appendChild(leftBtn);

    const img1 = document.createElement("img");
    img1.classList.add("slideImage");
    img1.classList.add("active");
    img1.src =burgerking1;
    // img1.width="1050";
    // img1.height="450";

    const img2 = document.createElement("img");
    img2.src = burgerking2;
    img2.classList.add("slideImage");
    
    // img2.width="1050";
    // img2.height="450";

    const img3 = document.createElement("img");
    img3.src = burgerking3;
    img3.classList.add("slideImage");
    
    // img3.width="1050";
    // img3.height="450";

    imageSlides.appendChild(img3)
    imageSlides.appendChild(img2)
    imageSlides.appendChild(img1)


    imagesInnerDiv.appendChild(imageSlides);
    imagesDiv.appendChild(imagesInnerDiv);
    contentDiv.appendChild(imagesDiv);

    const rightBtn = document.createElement("button");
    const chevRight = document.createElement("img");
    chevRight.src = chevronRight;
    chevRight.width="100";
    chevRight.height="50";

    rightBtn.appendChild(chevRight);
    imagesInnerDiv.appendChild(rightBtn);
    imagesDiv.appendChild(imagesInnerDiv);
    const images = document.querySelectorAll(".slideImage");
    const sliderButtonsContainer = document.createElement("ul");
    sliderButtonsContainer.classList.add("sliderButtonContainer");

    leftBtn.classList.add("leftBtn");
    rightBtn.classList.add("rightBtn");

    images.forEach((image,index) =>{
        const btn = document.createElement("li")
        const btnx = document.createElement("button");
        btnx.textContent="x";
        
        btn.appendChild(btnx);
        sliderButtonsContainer.appendChild(btn);
        btnx.addEventListener('click',(e)=>
        {
            const images = document.querySelectorAll(".slideImage");
            const deactiveImage = document.querySelector('.active');
            console.log(deactiveImage);
            
                deactiveImage.classList.remove("active");
            
            
            images[index].classList.add("active");
            
            currentIndex = index;

            
        })
    });

    imagesDiv.appendChild(sliderButtonsContainer);
    const startOrderSection = document.createElement("div");
    startOrderSection.classList.add("orderSection");
    const order = document.createElement("div");
    order.classList.add("left-order")
    const orderText = document.createElement("p");
    orderText.innerHTML="Start your <br> BK order"
   // orderText.textContent="Start your\n BK order"
    const pickUpBtn = document.createElement("button");
    pickUpBtn.textContent="Order Pickup";
    const deliveryBtn = document.createElement("button");
    deliveryBtn.textContent="Order Delivery";

    order.appendChild(orderText);
    order.appendChild(pickUpBtn);
    order.appendChild(deliveryBtn);

    const orderGif = document.createElement("img");
    orderGif.src= burgergif;
    

    startOrderSection.append(order);
    startOrderSection.append(orderGif);
    contentDiv.appendChild(startOrderSection);


    const miscSection = document.createElement("div");
    miscSection.classList.add("misc");

    const app = document.createElement("img");
    app.classList.add("appImg");
    app.src=burgerApp;

    const coupon = document.createElement("img");
    coupon.classList.add("couponImg");
    coupon.src=burgerCoupon;
    const recruit = document.createElement("img");
    recruit.classList.add('recruitImg');
    recruit.src=burgerRecruit;


    const leftDiv = document.createElement("div");
    leftDiv.classList.add("leftDiv")
    const rightDiv = document.createElement("div");
    rightDiv.classList.add("rightDiv");
    leftDiv.append(app);
    rightDiv.appendChild(coupon);
    rightDiv.appendChild(recruit);
    miscSection.appendChild(leftDiv);
    miscSection.appendChild(rightDiv);
    
    contentDiv.appendChild(miscSection);
    
    setInterval(changeImageOpacity,4000);



    chevRight.addEventListener('click',(e)=>{
        changeImageOpacity()
    });
    chevLeft.addEventListener('click',(e)=>{
        changeImageOpacity()
    });
    
}


function changeImageOpacity(){
    const images = document.querySelectorAll(".slideImage");
    
    if (images.length === 0) {
        console.error("No elements found with the class 'slideImage'.");
        return;
    }

    // Remove 'active' class from the current image
    if (images[currentIndex]) {
        images[currentIndex].classList.remove('active');
    }

    // Update currentIndex
    currentIndex = (currentIndex + 1) % images.length;
    

    // Add 'active' class to the new current image
    if (images[currentIndex]) {
        images[currentIndex].classList.add('active');
    }
}

