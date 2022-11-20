// Funcionamento
export default function initOpenOng() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  function toolTip() {
    const toolTips = document.querySelectorAll("[data-semana]");
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
      // tooltipBox: '',
      // element: '',
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

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add("open");
    toolTip();
  }
}
