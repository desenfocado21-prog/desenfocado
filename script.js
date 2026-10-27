// WhatsApp links and mobile navigation for Desenfocado.
// Ecuador number in international format: country code + number without the leading 0.
const WHATSAPP_NUMBER = "593992741931";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  const message = link.dataset.message || "Hola, quiero conocer más sobre Desenfocado.";
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
