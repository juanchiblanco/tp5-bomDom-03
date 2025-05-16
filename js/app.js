const tareas = [];

const inputTarea = document.getElementById("inputTarea");
const formulario = document.querySelector(".miFormulario");
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
  btnEliminarTarea.classList.add("my-2");
  btnEliminarTarea.classList.add("btn-sm");

  li.appendChild(btnEliminarTarea);

  btnEliminarTarea.addEventListener("click", () => {
    listaTareas.removeChild(li);
  });
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = inputTarea.value;

  if (texto !== "") {
    tareas.push(texto);
    agregarTarea();
    inputTarea.value = "";
  } else {
    alert("Ingrese una tarea");
  }
});
