$(document).ready(function(){
    $(window).scroll(function()
    {
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.Navbar').addClass("sticky");
        }
        else{
            $('.Navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        } 
    });
   // toggle menu/navbar script
    $('.menu-btn').click(function(){
    $('.Navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});
});

//slide-up script

$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Salesforce Developer", "Web Developer", "Agile Scrum Master", "Freelancer"],
    typeSpeed: 65,
    backSpeed: 40,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Salesforce Developer", "Web Developer", "Freelancer"],
    typeSpeed: 65,
    backSpeed: 40,
    loop: true
});

// Service Modal

const modalViews = document.querySelectorAll('.service_modal'),
    modelBtns = document.querySelectorAll('.service_button'),
    modalCloses = document.querySelectorAll('.service_modal-close')
let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}    
modelBtns.forEach((modelBtn,i)=>{
    modelBtn.addEventListener('click', () =>{
        modal(i)
    })
})
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

// owl carousel script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});
