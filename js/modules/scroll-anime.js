// Scroll Animation
export default class ScrollAnime {
  constructor(target, classe) {
    this.sections = document.querySelectorAll(target);
    this.classe = classe;
    this.halfwindow = window.innerHeight * 0.65;

    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distância de cada item em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.halfwindow),
      };
    });
  }

  // Verifica a distância de cada objeto em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add(this.classe);
      } else if (item.element.classList.contains(this.classe)) {
        item.element.classList.remove(this.classe);
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      document.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  // Revemo o evento de scroll
  destroy() {
    document.removeEventListener("scroll", this.checkDistance);
  }
}
