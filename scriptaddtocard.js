




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




// var swiper = new Swiper(".product-slider", {
//     slidesPerView: 3,
//     loop:false,
//     spaceBetween: 10,
//     autoplay: {
//         delay: 4000
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         550: {
//           slidesPerView: 2,
//         },
//         800: {
//           slidesPerView: 3,
//         },
//         950: {
//             slidesPerView: 4,
//           },
//         1000: {
//             slidesPerView: 5,
//         },
//     },
// });



// document.body.onload = addElement;

// function addElement () {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }

// var down = document.getElementById('GFG_DOWN'); 
          
// function GFG_Fun() {
//     var img = document.createElement('img');
//     img.src = 
// 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
//     document.getElementById('body').appendChild(img);
//     down.innerHTML = "Image Element Added."; 
// } 