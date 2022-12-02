// Accordion List
export default function initaccordion() {
  const questList = document.querySelectorAll('[data-anime="accordion"] dt');
  const showContent = 'show';

  function activeContent() {
    this.classList.toggle(showContent);
    this.nextElementSibling.classList.toggle(showContent);
  }

  if (questList.length) {
    questList[0].classList.add(showContent);
    questList[0].nextElementSibling.classList.add(showContent);

    questList.forEach((item) => {
      item.addEventListener('click', activeContent);
    });
  }
}
