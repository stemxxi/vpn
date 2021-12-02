// const bar = document.querySelector('#toggle');
// const menu = document.querySelector('.nav__content-devide');
// const nav = document.querySelector('.nav')




const navToggle = document.querySelector("#toggle");
const links = document.querySelector(".nav__content-devide");
const navLink = document.querySelector('.nav-item')
const header = document.querySelector('.header-content')
navToggle.addEventListener("click", function () {
  links.classList.toggle("active");
})
header.addEventListener('click', () => {
  links.classList.remove('active')
})

// SWIPER

// $('.center').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// // });