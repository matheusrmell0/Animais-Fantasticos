// SmoothScroll
export default class SmoothScroll {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }

    this.smoothscrolling = this.smoothscrolling.bind(this);
  }

  smoothscrolling(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
    // forma alternativa
    // window.scrollTo({
    //   top: section.offsetTop,
    //   behavior: 'smooth',
    // });
  }

  addLinkEvent() {
    if (this.linksInternos.length) {
      this.linksInternos.forEach((link) => {
        link.addEventListener("click", this.smoothscrolling);
      });
    }
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
