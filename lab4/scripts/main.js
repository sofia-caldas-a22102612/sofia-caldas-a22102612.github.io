// contador de cogumelos apanhados
let contador = 0;

// click num cogumelo: soma 1 e o cogumelo desaparece
function apanhar(cogumelo) {
  contador++;
  document.getElementById("numero").textContent = contador;
  cogumelo.style.visibility = "hidden";
}

// mouseover: o cogumelo fica maior
function crescer(cogumelo) {
  cogumelo.style.transform = "scale(1.3)";
}

// mouseout: o cogumelo volta ao tamanho normal
function encolher(cogumelo) {
  cogumelo.style.transform = "";
}

// click no botão "Recomeçar": contador a zero e os cogumelos voltam
function recomecar() {
  contador = 0;
  document.getElementById("numero").textContent = contador;

  const cogumelos = document.querySelectorAll("main img");
  for (const cogumelo of cogumelos) {
    cogumelo.style.visibility = "visible";
  }
}

// click no botão "Noite / Dia": muda a cor do bosque
function mudarFundo() {
  const bosque = document.getElementById("bosque");

  if (bosque.style.backgroundColor === "black") {
    bosque.style.backgroundColor = "";
  } else {
    bosque.style.backgroundColor = "black";
  }
}

// dblclick no título: muda o texto e a cor
function mudarTitulo() {
  const titulo = document.getElementById("titulo");
  titulo.textContent = "Cogumelos!!!";
  titulo.style.color = "#d69a2d";
}

// mousemove no bosque: mostra a posição do rato
function mostrarRato(evento) {
  document.getElementById("rato").textContent =
    "Rato em x: " + evento.clientX + ", y: " + evento.clientY;
}
