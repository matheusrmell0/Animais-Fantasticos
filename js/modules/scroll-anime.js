// Scroll Animation
export default function initScrollAnime() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    sections.forEach((item) => {
      function scrollAnimation() {
        const isSectionVisible = item.getBoundingClientRect().top - window.innerHeight * 0.8 < 0;
        if (isSectionVisible) {
          item.classList.add("anime");
        }
        // if(item.getBoundingClientRect().top - (window.innerHeight * 0.6) < 0){
        //   item.classList.add('anime');
        // } ---Outro método
      }
      scrollAnimation();
      document.addEventListener("scroll", scrollAnimation);
    });
  }
}