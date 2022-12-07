// FETCH BITCOIN API
export default function fetchBitcoins(apiLink, target) {
  const btcPrice = document.querySelector(target);
    fetch(apiLink)
      .then((r) => r.json())
      .then((rJson) => { (btcPrice.innerHTML = (1000 / rJson.BRL.sell).toFixed(4)); })
      .catch((erro) => { console.log(Error(erro)); });
}
