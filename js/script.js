
// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".skillbar").forEach(skillbar => {
      let percent = skillbar.getAttribute("data-percent");
      let color = skillbar.getAttribute("data-color");
      let bar = skillbar.querySelector(".skillbar-bar");
      let title = skillbar.querySelector(".skillbar-title");

      // Apply color
      bar.style.background = color;
      title.style.background = color;

      // Animate width
      setTimeout(() => {
          bar.style.width = percent;
      }, 300);
  });
});



//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const defaultEmail = "victormacharia002@gmail.com";
  const defaultPhone = "+254717372882";

  function sendEmail() {
      let name = document.getElementById("nameInput").value;
      let message = document.getElementById("messageInput").value;

      if (!name || !message) {
          alert("Please enter your name and message.");
          return;
      }

      let mailtoLink = `mailto:${defaultEmail}?subject=Contact from ${name}&body=${encodeURIComponent(message)}`;
      window.open(mailtoLink, "_self");  // More reliable on mobile
  }

  function sendWhatsApp() {
      let name = document.getElementById("nameInput").value;
      let message = document.getElementById("messageInput").value;

      if (!name || !message) {
          alert("Please enter your name and message.");
          return;
      }

      let whatsappLink = `https://api.whatsapp.com/send?phone=${defaultPhone.replace("+", "")}&text=${encodeURIComponent("Hello, I am  " + name + ". " + message)}`;
      window.location.href = whatsappLink;  // More reliable on mobile
  }