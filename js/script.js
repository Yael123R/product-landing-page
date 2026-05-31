const btnModo = document.querySelector("#btn-modo");
const body = document.body;

// Validamos que el botón exista en el HTML actual antes de colgarle el evento
if (btnModo) {
  btnModo.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Cambiar el texto del botón según el modo
    if (body.classList.contains("dark-mode")) {
      btnModo.textContent = "Cambiar a modo claro";
    } else {
      btnModo.textContent = "Cambiar a modo oscuro";
    }
  });
}