// Scroll Animation
export default class ScrollAnime {
  constructor(target, classe) {
    this.sections = document.querySelectorAll(target);
    this.classe = classe;
    this.halfwindow = window.innerHeight * 0.65;

    this.scrollAnimation = this.scrollAnimation.bind(this);
  }

  scrollAnimation() {
    this.sections.forEach((item) => {
    const isSectionVisible =
      item.getBoundingClientRect().top - this.halfwindow < 0;
    if (isSectionVisible) {
      item.classList.add(this.classe);
    } else if (item.classList.contains(this.classe)) {
      item.classList.remove(this.classe);
    }
  });
}

  init() {
    if (this.sections.length) {
      this.scrollAnimation();
      document.addEventListener("scroll", this.scrollAnimation);
    }
  }
}
