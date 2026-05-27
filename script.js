window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if(window.scrollY > 400) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// OPTIONAL WHATSAPP FORM REDIRECT
const form = document.getElementById("contactForm");

form.addEventListener("submit", () => {
  alert("Your enquiry has been submitted successfully.");
});

function sendToWhatsapp() {

  const name = document.getElementById("name").value;

  const phone = document.getElementById("phone").value;

  const message = document.getElementById("message").value;

  const whatsappMessage =
`Hi Pranjal Enterprises,

Name: ${name}
Phone: ${phone}

Message:
${message}`;

  const encodedMessage =
    encodeURIComponent(whatsappMessage);

  window.open(
    `https://wa.me/916294537321?text=${encodedMessage}`,
    "_blank"
  );

}