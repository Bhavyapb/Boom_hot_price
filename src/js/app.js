import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  var hot = document.querySelectorAll(".hot")
  hot.forEach(item => {
    item.innerHTML += "🔥"
  })
  
});

