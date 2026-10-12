function hello() {
  const titulo = document.querySelector("h1");

  if (titulo.textContent === "Hello!") {
    titulo.textContent = "Goodbye!";
    titulo.style.color = "green";
  } else {
    titulo.textContent = "Hello!";
    titulo.style.color = "black";
  }
}
