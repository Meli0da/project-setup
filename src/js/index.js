console.log("js loaded");


// MOBILE NAVIGATION //
const openClass="open"
let isOpen = false
function onMenuButtonClick(event){
    
    if(isOpen){
        for(const button of buttons){
            button.classList.remove(openClass)
        }
        mobileNav.classList.remove(openClass)
        isOpen = false
    }
    else{
        for(const button of buttons){
            button.classList.add(openClass)
        }
        mobileNav.classList.add(openClass)
        isOpen = true
    }
}
const buttons = document.getElementsByClassName("mobbtn")
for(const button of buttons){
    button.addEventListener("click",onMenuButtonClick)
}
const mobileNav = document.getElementsByClassName("mobilenav")[0]