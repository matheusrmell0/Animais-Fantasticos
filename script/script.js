// Navegação por Tabs
function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove("ativo");
      });
      const dataAnime = tabContent[index].dataset.anime
      tabContent[index].classList.add("ativo", dataAnime);
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();
//

// Accordion List
function initaccordion() {
  const questList = document.querySelectorAll("[data-anime='accordion'] dt");
  const showContent = "show";
  if (questList.length) {
    questList[0].classList.add(showContent);
    questList[0].nextElementSibling.classList.add(showContent);
    function activeContent() {
      this.classList.toggle(showContent);
      this.nextElementSibling.classList.toggle(showContent);
    }
    questList.forEach((item) => {
      item.addEventListener("click", activeContent);
    });
  }
}
initaccordion();
//

// SmoothScroll
function initSmoothScroll() {
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
initSmoothScroll();
//

// Scroll Animation
function initScrollAnime() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    sections.forEach((item) => {
      function scrollAnimation() {
        const isSectionVisible = item.getBoundingClientRect().top - window.innerHeight * 0.6 < 0;
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
initScrollAnime();
//
