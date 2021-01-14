let mobileMenu = document.querySelector(".mobile-menu");
let mainMenu = document.querySelector(".place");
let union = document.querySelector(".close")

mobileMenu.addEventListener("click",function (){
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")){
        mainMenu.classList.add("active-menu");
    }else{
        mainMenu.classList.remove("active-menu");
    }
})
union.addEventListener("click",function (){
    mobileMenu.classList.toggle("active-menu");
    mainMenu.classList.remove("active-menu");
})
