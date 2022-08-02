import { desplegarTareas } from "./leerTareas.js";

/**
 * ! Function para el icono de borrar.
 */
const iconoBorrar = (id) => {
  // Creamos el elemento I.
  const icono = document.createElement("i");
  // Agregamos 4 clases.
  icono.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
  // Cuando haga click, se ejecuta la función de tarea completada.
  icono.addEventListener("click", () => borrarTarea(id));
  // Retornamos el icono.
  return icono;
};

/**
 * ! Function para eliminar la tarea.
 */
const borrarTarea = (id) => {
  // Seleccionamos el elemento psdre de todas las tareas.
  const li = document.querySelector("[data-lista]");
  // Vamos a obtener el elemento del LOCAL-STORAGE
  const tareas = JSON.parse(localStorage.getItem("tareas"));
  // Buscar la posición del elemento que queremos eliminar
  const posicion = tareas.findIndex((item) => item.id === id);
  // Eliminamos la tarea con el metodo SPLICE nativo para usar con los arreglos.
  tareas.splice(posicion, 1);
  // Limpiar la lista.
  li.innerHTML = "";
  // Almacenar nuevamente la información actualizada.
  localStorage.setItem("tareas", JSON.stringify(tareas));
  // Desplegamos o actualizamos las tareas.
  desplegarTareas();
};

export default iconoBorrar;
