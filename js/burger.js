const burgerWrapper = document.querySelector(".nav-wrapper");
const body = document.querySelector("body"); //.lock
const burgerButton = document.querySelector(".burger");
const orderButton = document.querySelector(".nav-wrapper__button");
function pushBurgerButton() {
    if(burgerWrapper.classList.contains("active")){
        burgerWrapper.classList.remove("active");
        body.classList.remove("lock");
        burgerButton.classList.remove("active");
    } else {
        burgerWrapper.classList.toggle("active");
        body.classList.toggle("lock");
        burgerButton.classList.toggle("active");
    }
}  
function pushOrderButton() {
    if(burgerWrapper.classList.contains("active")){
        burgerWrapper.classList.remove("active");
        body.classList.remove("lock");
        burgerButton.classList.remove("active");
    }
}  
burgerButton.addEventListener("click", pushBurgerButton);
orderButton.addEventListener("click", pushOrderButton);



//???? 
const orderButtonLink = document.querySelector("a.nav-wrapper__button");
const currentPageUrl = window.location.href;
const aboutLinkIndex = currentPageUrl.search("about-us");
const sweetsLinkIndex = currentPageUrl.search("sweets");
const firstPartAboutUrl = currentPageUrl.slice(0, aboutLinkIndex);
const firstPartSweetsUrl = currentPageUrl.slice(0, sweetsLinkIndex);
function changeLink(){
    if(currentPageUrl.includes("about-us")) {
        orderButtonLink.href = firstPartAboutUrl + "index.html#form";
    }
    if(currentPageUrl.includes("sweets")) {
        orderButtonLink.href = firstPartSweetsUrl + "index.html#form";
    }
}
document.addEventListener("DOMContentLoaded", changeLink());

  
  