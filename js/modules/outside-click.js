// Outside-Click
export default function outsideClick(item, events, callBack) {
  const outside = "data-outside";
  const htmlPage = document.documentElement;

  if (!item.hasAttribute(outside)) {
    events.forEach(userEvent =>{
      htmlPage.addEventListener(userEvent, closedMenu);
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
}