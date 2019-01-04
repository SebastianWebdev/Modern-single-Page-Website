// header button active 
const headerBtn = document.querySelector(' header .btn');
const radialBtn1 = document.querySelector(".jsBtn1");
const radialBtn2 = document.querySelector(".jsBtn2");
const radialBtnInner1 = document.querySelector(".jsBtnInner1");
const radialBtnInner2 = document.querySelector(".jsBtnInner2");
const radialBtnLabel1 = document.querySelector(".jsBtnLabel1");
const radialBtnLabel2 = document.querySelector(".jsBtnLabel2");
// nav variables
const navBtnHTML = document.querySelector(".nav-button");

const navBackgroundHTML = document.querySelector(".nav-background");

const navFulscreenHTML = document.querySelector(".fullscrean");

const navUlHtml = document.querySelector(".nav__ul");

const topBarHtml = document.querySelector(".top-bar");
const midBarHtml = document.querySelector(".mid-bar");
const bottomBarHtml = document.querySelector(".bottom-bar");

// tworzę tablicę zawierająca wszystkie elementy na kturych ma zostać wykonany kod po kliku
const navElements = [navBtnHTML, navBackgroundHTML, navFulscreenHTML, navUlHtml, topBarHtml, midBarHtml, bottomBarHtml];

// wykonuje w event funkcie zawierająca pętle na talicy.
navBtnHTML.addEventListener('click', function () {
    for (let index = 1; index < navElements.length; index++) {
        //const element = array[index];
        navElements[index].classList.toggle("click-nav-btn");
    }
});
//łopatologicznie i nieprawidłowo.
/*navBtnHTML.addEventListener('click', function () {
    navBtnHTML.classList.toggle("click-nav-btn");
    navBackgroundHTML.classList.toggle("click-nav-btn");
    navFulscreenHTML.classList.toggle("click-nav-btn");
    navUlHtml.classList.toggle("click-nav-btn");
    topBarHtml.classList.toggle("click-nav-btn");
    midBarHtml.classList.toggle("click-nav-btn");
    bottomBarHtml.classList.toggle("click-nav-btn");
});
*/
//nav variables










const radialBtnConteiner = document.querySelector(".btcontainer-btn");

radialBtn1.addEventListener("click", function () {
    radialBtnInner1.classList.add("btn--active");
    radialBtnInner2.classList.remove("btn--active");
})
radialBtn2.addEventListener("click", function () {
    radialBtnInner1.classList.remove("btn--active");
    radialBtnInner2.classList.add("btn--active");
})
radialBtnLabel1.addEventListener("click", function () {
    radialBtnInner1.classList.add("btn--active");
    radialBtnInner2.classList.remove("btn--active");
})
radialBtnLabel2.addEventListener("click", function () {
    radialBtnInner1.classList.remove("btn--active");
    radialBtnInner2.classList.add("btn--active");
})


// card button 
//const cardSideBtn1 = document.querySelector("card-side--back-3 .btn");
const cardButtonsHtml = [document.querySelector(".card-side--back-3 .btn"), document.querySelector(".card-side--back-2 button"), document.querySelector(".card-side--back-1 button")];
/*cardButtonsHtml.addEventListener('click', function () {
    for (let index = 1; index < cardButtonsHtml; index++) {
        //const element = array[index];
        cardButtonsHtml[index].classList.toggle("click-card-btn");
    }
});*/
const cardButtoneffects = [document.querySelector('.pupup__bg'), document.querySelector('.pupup__container')]

for (let index = 0; index < cardButtonsHtml.length; index++) {
    cardButtonsHtml[index].addEventListener('click', function () {
        console.log('działa');

        for (let index = 0; index < cardButtoneffects.length; index++) {
            //const element = array[index];
            cardButtoneffects[index].classList.add("click-card-btn");
        }
    })

};
const popupButton = document.querySelector('.popup__button span');
popupButton.addEventListener("click", function () {
    for (let index = 0; index < cardButtoneffects.length; index++) {
        //const element = array[index];
        cardButtoneffects[index].classList.remove("click-card-btn");
    }


})