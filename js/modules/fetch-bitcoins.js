// FETCH BITCOIN API
export default function initFetchBitcoins() {
  const btcPrice = document.querySelector('.btc-preco');

  function btcGetApi(url) {
    fetch(url)
      .then((r) => r.json())
      .then((rJson) => { (btcPrice.innerHTML = (1000 / rJson.BRL.sell).toFixed(4)); })
      .catch((erro) => { console.log(Error(erro)); });
  }
  btcGetApi('https://blockchain.info/ticker');
}
