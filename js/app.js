const tareas = [];

const inputTarea = document.getElementById("inputTarea");
const btnAgregarTarea = document.querySelector(".btn-primary");

btnAgregarTarea.addEventListener("click", () => {
  const texto = inputTarea.value;

  if (texto !== "") {
    tareas.push(texto);
    inputTarea.value = "";
  }
});

console.log(tareas)