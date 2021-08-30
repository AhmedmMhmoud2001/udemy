let span =document.querySelector(".up");
window.onscroll = function () {
    if( this.scrollY >=1000){
        span.classList.add("show")
    }
    else {
        span.classList.remove("show")
    }
};
span.onclick=function(){
    window.scrollTo({
        top:0
    });
};

function opensidenav(){
    document.getElementById("sidnav").style.width="300PX"
}
function closesidenav(){
    document.getElementById("sidnav").style.width="0PX"
}















var swiper = new Swiper(".product-slider1", {
    slidesPerView: 3,
    loop:false,
    spaceBetween: 10,
    autoplay: {
        delay: 4000
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        550: {
          slidesPerView: 3,
        },
        700: {
          slidesPerView: 4,
        },
        900: {
            slidesPerView: 5,
          },
        1000: {
            slidesPerView: 7,
        },
    },
});


var swiper = new Swiper(".product-slider", {
    slidesPerView: 3,
    loop:false,
    spaceBetween: 10,
    autoplay: {
        delay: 4000
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        950: {
            slidesPerView: 4,
          },
        1000: {
            slidesPerView: 5,
        },
    },
});









// sing up


