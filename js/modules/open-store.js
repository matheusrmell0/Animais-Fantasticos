// Funcionamento
export default function openOng(target, classe) {
  const openHour = document.querySelectorAll(target);

  openHour.forEach((openStore) => {
    const weekDays = openStore.dataset.semana.split(',').map(Number);
    const weekHour = openStore.dataset.horario.split(',').map(Number);
    const nowDate = new Date();
    const nowDay = nowDate.getDay();
    const timerNow = nowDate.getHours();
    const weekOpen = weekDays.indexOf(nowDay) !== -1;
    const opened = timerNow >= weekHour[0] && timerNow < weekHour[1];

    const onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = `${event.pageY + 10}px`;
        this.tooltipBox.style.left = `${event.pageX + 10}px`;
      },
    };

    const onMouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mouseleave', onMouseMove);
      },
    };

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
    function toolTip(toolTips) {
      toolTips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
      });
    }
    if (weekOpen && opened) {
      openStore.classList.add(classe);
      toolTip(openHour);
    }
  });
}

// // Funcionamento classe
// export default class OpenOng {
//   constructor(funcionamento, activeClass) {
//     this.funcionamento = document.querySelector(funcionamento);
    
//     if(activeClass === undefined) activeClass = 'open'
//     else this.activeClass = activeClass;
//   }

//   dadosFuncionamento() {
//     this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
//     this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
//   }

//   dadosAgora() {
//     this.dataAgora = new Date();
//     this.diaAgora = this.dataAgora.getDay();
//     this.horarioAgora = this.dataAgora.getUTCHours() - 3;
//   }

//   estaAberto() {
//     const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
//     const horarioAberto = (this.horarioAgora >= this.horarioSemana[0]
//       && this.horarioAgora < this.horarioSemana[1]);
//     return semanaAberto && horarioAberto;
//   }

//   ativaAberto() {
//     if (this.estaAberto()) {
//       this.funcionamento.classList.add(this.activeClass);
//     }
//   }

//   init() {
//     if (this.funcionamento) {
//       this.dadosFuncionamento();
//       this.dadosAgora();
//       this.ativaAberto();
//     }
//     return this;
//   }
// }


