const tareas = [];

const inputTarea = document.getElementById("inputTarea");
const btnAgregarTarea = document.querySelector(".btn-primary");
const listaTareas = document.getElementById("listaTareas");

const agregarTarea = () => {
  const li = document.createElement("li");
  li.textContent = inputTarea.value;

  listaTareas.appendChild(li);

  const btnEliminarTarea = document.createElement("button");
  btnEliminarTarea.textContent = "Eliminar";
  btnEliminarTarea.classList.add("btn");
  btnEliminarTarea.classList.add("btn-danger");
  btnEliminarTarea.classList.add("ms-3");

  li.appendChild(btnEliminarTarea);

  btnEliminarTarea.addEventListener("click", () => {
    listaTareas.removeChild(li);
  });
};

btnAgregarTarea.addEventListener("click", () => {
  const texto = inputTarea.value;

  if (texto !== "") {
    tareas.push(texto);
    agregarTarea();
    inputTarea.value = "";
  } else {
    alert("Ingrese una tarea");
  }
});
