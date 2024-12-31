// CURSOR EFFECT
const cursor = document.getElementById('cursor');
document.documentElement.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX + 'px';
  const mouseY = evt.clientY + 'px';
  const root = document.documentElement;
  cursor.style.setProperty('display', 'inline-block');
  setTimeout(() => {
    root.style.setProperty('--cursorX', mouseX);
    root.style.setProperty('--cursorY', mouseY);
  }, 160);
});

document.documentElement.addEventListener("mouseleave", evt => {
  cursor.style.setProperty('display', 'none');
});



// REVEAL ON SCROLL ANIMATION
const paragraphs = document.querySelectorAll(".reveal")

document.addEventListener("scroll", function(){
    paragraphs.forEach(paragraph => {
        if(isInView(paragraph)) {
            paragraph.classList.add("reveal--visible");
        }
    })
})

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
}



// HAMBURGER MENU
function dropdown() {
  var hamburger = document.getElementById("links");
  if (hamburger.style.display === "block") {
    hamburger.style.display = "none";
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("hamb").innerHTML = '<i class="fa-solid fa-bars" id="hamburger"></i>';
  }
  else {
    hamburger.style.display = "block";
    document.getElementById("header").style.backgroundColor = "#283D47";
    document.getElementById("hamb").innerHTML = '<i class="fa-solid fa-xmark" id="hamburger"></i>';
  }
}


// New year popup
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("close-popup");
  const openIcon = document.getElementById("open-icon");

  // Functie om een cookie te zetten
  function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
  }

  // Functie om een cookie te lezen
  function getCookie(name) {
      const cookies = document.cookie.split("; ");
      for (let cookie of cookies) {
          const [key, value] = cookie.split("=");
          if (key === name) return value;
      }
      return null;
  }

  // Controleer of de popup al eerder is gesloten
  if (!getCookie("popupClosed")) {
      popup.classList.remove("hidden");
  } else {
      popup.classList.add("hidden");
      openIcon.classList.remove("hidden");
  }

  // Sluit de popup en zet een cookie
  closePopup.addEventListener("click", () => {
      popup.classList.add("hidden");
      openIcon.classList.remove("hidden");
      setCookie("popupClosed", "true", 7); // Cookie blijft 7 dagen geldig
  });

  // Heropen de popup via het icoon
  openIcon.addEventListener("click", () => {
      popup.classList.remove("hidden");
      openIcon.classList.add("hidden");
  });
});



// New year countdown
// Set the date we're counting down to
var countDownDate = new Date("Jan 8, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);