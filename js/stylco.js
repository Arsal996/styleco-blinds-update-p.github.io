let navbar = document.querySelector('.all-navbar');

window.onscroll = () => {

    if (window.scrollY > 50) {
        navbar.classList.add("fixed-nav");
        // bookFrom.style.display = "none";
        mainNav.classList.remove('active-nav')
    }
    else {
       navbar.classList.remove("fixed-nav");
    }
}

let mainNav = document.querySelector('.main-nav');
let menuBtn = document.querySelector('.mbl-menu-btn')
let closeNav = document.querySelector('.close-nav')

 menuBtn.onclick = ()=>{
     mainNav.classList.toggle('active-nav')
 }
 closeNav.onclick = ()=>{
    mainNav.classList.remove('active-nav')
}

let formBtn = document.querySelector('.booking-form-btn');
let bookFrom = document.querySelector('.consultation-form');
let closeFrom = document.querySelector('.close-form')

 formBtn.onclick = ()=>{
      bookFrom.style.display = "block";
 }

 closeFrom.onclick = ()=>{
     bookFrom.style.display = "none"
 }





