import burgerking1 from './img/burgerking1.jpg';
import burgergif from './img/burgergif.gif';
import burgerCoupon from './img/burgerCoupon.png';
import burgerApp from './img/burgerApp.png';
import burgerRecruit from './img/burgerRecruit.png'; 
export default function createFrontPage(){
    const contentDiv = document.getElementById("content");
    const header= document.querySelector("header");

    

    const imagesDiv = document.createElement("div");

    imagesDiv.classList.add("imagesContainer")

    const imageSlides = document.createElement("div");
    imageSlides.classList.add('slides');
    const img1 = document.createElement("img");
    img1.src =burgerking1;
    img1.width="1050";
    img1.height="450";
    imageSlides.appendChild(img1)


    imagesDiv.appendChild(imageSlides);
    contentDiv.appendChild(imagesDiv);

    const startOrderSection = document.createElement("div");
    startOrderSection.classList.add("orderSection");
    const order = document.createElement("div");
    order.classList.add("left-order")
    const orderText = document.createElement("p");
    orderText.textContent="Start your BK order"
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

    miscSection.appendChild(app);
    miscSection.appendChild(coupon);
    miscSection.appendChild(recruit);
    contentDiv.appendChild(miscSection);

}
