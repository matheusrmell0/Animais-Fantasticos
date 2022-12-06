// Tooltip
export default class Tooltip {
  constructor(tooltips) {
    this.toolTipMap = document.querySelectorAll(tooltips);

    // Bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Movimenta a tooltip de acordo com eixo X/Y da tela com o mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 180}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // Remove os eventos da Tooltip e a tooltip da tela
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mouseleave", this.onMouseMove);
  }

  // Cria a tooltip box e adiciona no body
  tooltipCreateBox(item) {
    const tooltipBox = document.createElement("div");
    const ariaLabelText = item.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = ariaLabelText;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Cria a tooltip e adiciona os eventos de mousemove e mouseleave ao Event.target
  onMouseOver({ currentTarget }) {
    // Cria a tooltipbox e a coloca em uma propriedade
    this.tooltipCreateBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // Adiciona os eventos de mouseover a cada tooltip que ouver
  addTooltipsEvent() {
    this.toolTipMap.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }
  
  init() {
    if (this.toolTipMap.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
