const navbar = document.querySelector("header div.menu img")
const nav = document.querySelector("header nav")

navbar.addEventListener("click", ()=>{
    const src = navbar.getAttribute("src")

    if(src === "./assets/icons/menu.svg"){
        navbar.setAttribute("src", "./assets/icons/close.svg")
    }else{
        navbar.setAttribute("src", "./assets/icons/menu.svg")
    }

    nav.classList.toggle("active")
})