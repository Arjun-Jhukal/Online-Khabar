$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// Date
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let objectDate = new Date();
const year = objectDate.getFullYear();
const month = months[objectDate.getMonth()];
const day = objectDate.getDate();
const week = weekDays[objectDate.getDay() + 1];

const d = day + " " + month + " " + year + ", " + week;
document.getElementById("date").innerHTML = d;

// offcanvas menu

function showMenu() {
  var mobileMenu = document.querySelector(".mobile-menu-wrapper");
  mobileMenu.classList.add("smenu");
}
function closeMenu() {
  var mobileMenu = document.querySelector(".mobile-menu-wrapper");
  mobileMenu.classList.remove("smenu");
}

// pagination
let link = document.getElementsByClassName("link");
let currentValue = 1;

function myFunction() {
  link.classList.add("active");
}
