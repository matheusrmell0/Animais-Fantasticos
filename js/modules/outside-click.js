// Outside-Click / Função para clique do lado de fora 
export default function outsideClick(item, events, callBack) {
  const outside = "data-outside";
  const htmlPage = document.documentElement;

  if (!item.hasAttribute(outside)) {
    events.forEach(userEvent =>{
      setTimeout(() => htmlPage.addEventListener(userEvent, closedMenu));
    });
    item.setAttribute(outside, "");
  }

  function closedMenu(event) {
    if (!item.contains(event.target)) {
      item.removeAttribute(outside);
      events.forEach(userEvent =>{
        htmlPage.removeEventListener(userEvent, closedMenu);
      });
      callBack();
    }
  }
};