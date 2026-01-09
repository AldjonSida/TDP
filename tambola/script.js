const tabellone = document.getElementById("tabellone");
const numeroEstratto = document.getElementById("numeroEstratto");
let numeri = [];

for (let i = 1; i <= 90; i++) {
    let cella = document.createElement("div");
    cella.classList.add("cella");
    cella.id = "num" + i;
    cella.textContent = i;
    tabellone.appendChild(cella);
    numeri.push(i);
}

// Funzione estrazione
document.getElementById("btnEstrai").addEventListener("click", () => {
    if (numeri.length === 0) {
        numeroEstratto.textContent = "FINITO!";
        return;
    }

    // Indice casuale
    let indice = Math.floor(Math.random() * numeri.length);
    let numero = numeri[indice];

    // Mostra numero estratto
    numeroEstratto.textContent = numero;

    // Colora il numero sul tabellone
    document.getElementById("num" + numero).classList.add("estratto");

    // Rimuove il numero dall'array
    numeri.splice(indice, 1);
});
