// Tooltip
export default function initTooltip() {
  const toolTipMap = document.querySelectorAll('[data-tooltip]');
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    // tooltipBox: '',
    // element: '',
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mouseleave', onMouseMove);
    },
  };

  function toolTip(toolTips) {
    function tooltipCreateBox(item) {
      const tooltipBox = document.createElement('div');
      const ariaLabelText = item.getAttribute('aria-label');
      tooltipBox.classList.add('tooltip');
      tooltipBox.innerText = ariaLabelText;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }

    function onMouseOver() {
      const tooltipBox = tooltipCreateBox(this);

      onMouseMove.tooltipBox = tooltipBox;
      this.addEventListener('mousemove', onMouseMove);

      onMouseLeave.tooltipBox = tooltipBox;
      onMouseLeave.element = this;
      this.addEventListener('mouseleave', onMouseLeave);
    }

    toolTips.forEach((item) => {
      item.addEventListener('mouseover', onMouseOver);
    });
  }
  toolTip(toolTipMap);
}
