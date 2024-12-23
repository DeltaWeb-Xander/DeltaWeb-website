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