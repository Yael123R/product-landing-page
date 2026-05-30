const btnModo = document.querySelector("#btn-modo");
const body = document.body;

btnModo.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Cambiar el texto del botón según el modo
  if (body.classList.contains("dark-mode")) {
    btnModo.textContent = "Cambiar a modo claro";
  } else {
    btnModo.textContent = "Cambiar a modo oscuro";
  }
});