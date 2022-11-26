// Funcionamento
export default function initOpenOng() {
  const openHour = document.querySelectorAll("[data-semana]");

  openHour.forEach((openStore) => {
    const weekDays = openStore.dataset.semana.split(",").map(Number);
    const weekHour = openStore.dataset.horario.split(",").map(Number);
    const nowDate = new Date();
    const nowDay = nowDate.getDay();
    const timerNow = nowDate.getHours();
    const weekOpen = weekDays.indexOf(nowDay) !== -1;
    const opened = timerNow >= weekHour[0] && timerNow < weekHour[1];

    if (weekOpen && opened) {
      openStore.classList.add("open");
      toolTip(openHour)
    }

    function toolTip(toolTips) {
      toolTips.forEach((item) => {
        item.addEventListener("mouseover", onMouseOver);
      });
  
      function onMouseOver() {
        const tooltipBox = tooltipCreateBox(this);
  
        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener("mousemove", onMouseMove);
  
        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener("mouseleave", onMouseLeave);
      }
  
      const onMouseLeave = {
        handleEvent() {
          this.tooltipBox.remove();
          this.element.removeEventListener("mouseleave", onMouseLeave);
          this.element.removeEventListener("mouseleave", onMouseMove);
        },
      };
      const onMouseMove = {
        handleEvent(event) {
          this.tooltipBox.style.top = `${event.pageY + 10}px`;
          this.tooltipBox.style.left = `${event.pageX + 10}px`;
        },
      };
  
      function tooltipCreateBox(item) {
        const tooltipBox = document.createElement("div");
        const ariaLabelText = item.getAttribute("aria-label");
        tooltipBox.classList.add("tooltip");
        tooltipBox.innerText = ariaLabelText;
        document.body.appendChild(tooltipBox);
        return tooltipBox;
      }
    }
  });
}
