// creating button click show hide navbar
let  togglebtn = document.querySelector(".togglebtn");
let  nav = document.querySelector(".navlinks");
let links = document.querySelector(".navlinks li");
togglebtn.addEventListener("click",function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

let typed = new Typed(".input",{
    strings:["Frontend Developer","UX Designer","Web Developer","Web Designer","Wordpress Developer"],
    typedSpeed:70,
    backSpeed:55,
    loop:true
})