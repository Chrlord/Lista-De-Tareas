/**
 * ! Function que confirma el campo CHECK.
 */
const iconoChecked = (id) => {
  // Creamos el elemento I.
  const icono = document.createElement("i");
  // Agregamos 3 clases.
  icono.classList.add("far", "fa-check-square", "icon");
  // Cuando haga click, se ejecuta la función de tarea completada.
  icono.addEventListener("click", (evento) => tareaCompletada(evento, id));
  // Retornamos el icono.
  return icono;
};

/**
 * ! Function para tarea completada.
 */
const tareaCompletada = (evento, id) => {
  // Para saber cual elemento fue seleccionado.
  const elemento = evento.target;
  // Verifica si la clase existe, si no existe la coloca y si existe la quita.
  elemento.classList.toggle("fas");
  // Verifica si la clase existe, si no existe la coloca y si existe la quita.
  elemento.classList.toggle("completeIcon");
  // Verifica si la clase existe, si no existe la coloca y si existe la quita.
  elemento.classList.toggle("far");
  //
  const tareas = JSON.parse(localStorage.getItem("tareas"));
  // Para saber cual es la posición de la tarea que esta seleccionada
  const posicion = tareas.findIndex((item) => item.id === id);
  // TAREA en su posición completada va a ser igual a su negación
  tareas[posicion]["completado"] = !tareas[posicion]["completado"];
  // Guardaremos el arreglo en el LOCAL-STORAGE
  localStorage.setItem("tareas", JSON.stringify(tareas));
};

// Para exportar el archivo y usar sus funciones en otro archivo.
export default iconoChecked;
