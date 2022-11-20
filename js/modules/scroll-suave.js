// SmoothScroll
export default function initSmoothScroll() {
  const linksInternos = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]');

  if (linksInternos.length) {
    function smoothscrolling(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
    
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // forma alternativa
      // window.scrollTo({
      //   top: section.offsetTop,
      //   behavior: 'smooth',
      // });
    }
    linksInternos.forEach((link) => {
      link.addEventListener("click", smoothscrolling);
    });
  }
}