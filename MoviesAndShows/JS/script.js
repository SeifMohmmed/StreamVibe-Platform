/* code for menu in Nav bar*/
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/*------------------------------------*/
const faqItems = document.querySelectorAll(".FAQ-Item");

faqItems.forEach((item) => {
  const button = item.querySelector(".btn");

  button.addEventListener("click", () => {
    faqItems.forEach((otherItem) => {
      const otherButton = otherItem.querySelector(".btn");
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        otherButton.textContent = "+";
      }
    });

    item.classList.toggle("active");
    button.textContent = item.classList.contains("active") ? "−" : "+";
  });
});
