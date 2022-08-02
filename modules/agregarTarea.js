// Importamos función desde la ruta.
import iconoChecked from "./tareaCompletada.js";
import iconoBorrar from "./eliminarTarea.js";
import { desplegarTareas } from "./leerTareas.js";

// Función para agregar la tarea.
export const agregarTarea = (evento) => {
  // Previene que se realice el evento por defecto.
  evento.preventDefault();
  // Obtenemos el elemento UL.
  const lista = document.querySelector("[data-lista]");
  // Taremos el INPUT del HTML.
  const input = document.querySelector("[data-form-input]");
  // Taremos el CALENDARIO del HTML.
  const calendario = document.querySelector("[data-form-date]");

  // Obtenemos el valor del INPUT.
  const valor = input.value;
  // Obtenemos el valor del INPUT CALENDARIO.
  const fecha = calendario.value;
  // En la variable FORMATOFECHA especificamos el formato con el uso de la librería MOMENT
  const formatoFecha = moment(fecha).format("DD/MM/YYYY");

  // Evaluamos que los campos sean llenados correctamente.
  if (valor === "" || fecha === "") {
    // En caso de que alguno de los de arriba sea verdadero el siguiente código no se ejecutara.
    return;
  }

  // Limpiamos el INPUT.
  input.value = "";
  // Limpiamos el CALENDARIO.
  calendario.value = "";

  //
  const completado = false;

  // Creamos un objeto.
  const objTarea = {
    valor,
    formatoFecha,
    completado,
    id: uuid.v4(),
  };

  // Vaciamos la lista
  lista.innerHTML = "";

  // Vamos a extraer desde el LOCAL-STORAGE las tareas guardadas.
  // y en caso de que el resultado sea NULL, retorna un arreglo vació.
  // Con JSON.PARSE convertimos el objeto JSON a un objeto JS con el cual se pueda trabajar.
  const listaTarea = JSON.parse(localStorage.getItem("tareas")) || [];
  // Agrega el VALOR y FORMATO-FECHA al arreglo que esta en el objeto tarea.
  listaTarea.push(objTarea);
  // Agregamos las TAREAS actualizadas al LOCAL-STORAGE y convertimos el objeto a un formato JSON
  localStorage.setItem("tareas", JSON.stringify(listaTarea));

  // LLamamos la función LEER-TAREA
  desplegarTareas();
};

// Función que crea la tarea. y Restructuración del objeto.
export const crearTarea = ({ valor, formatoFecha, completado, id }) => {
  // Creamos el elemento LI.
  const tarea = document.createElement("li");
  // Agregamos la clase CARD a TAREA
  tarea.classList.add("card");

  // Creamos el elemento de tipo DIV.
  const contenedorTarea = document.createElement("div");

  // Guardamos el valor de la función en otra variable.
  const confirmar = iconoChecked(id);
  // Comprobamos si la TAREA fue completada.
  if (completado) {
    // Verifica si la clase existe, si no existe la coloca y si existe la quita.
    confirmar.classList.toggle("fas");
    // Verifica si la clase existe, si no existe la coloca y si existe la quita.
    confirmar.classList.toggle("completeIcon");
    // Verifica si la clase existe, si no existe la coloca y si existe la quita.
    confirmar.classList.toggle("far");
  }
  // Creamos la etiqueta span que contendrá el titulo de la tarea.
  const tituloTarea = document.createElement("span");
  // Agregamos la clase a la etiqueta span.
  tituloTarea.classList.add("task");
  // Agregamos el valor al span.
  tituloTarea.innerText = valor;
  // Agregamos el icono de CHECK al contenedor padre.
  contenedorTarea.appendChild(confirmar);
  // Agregamos el span con el titulo al contenedor padre.
  contenedorTarea.appendChild(tituloTarea);

  // Creamos una etiqueta SPAN para mostrar la fecha.
  const elementoFecha = document.createElement("span");
  // Asignamos el FORMATO-FECHA al ELEMENTO-FECHA para mostrarlo en el HTML.
  elementoFecha.innerHTML = formatoFecha;

  // Agregando el contenedor a la lista de tarea.
  tarea.appendChild(contenedorTarea);
  // Agregamos el ELEMENTO-FECHA a la tarea.
  tarea.appendChild(elementoFecha);
  // Agregando el icono de PAPELERA a la tarea.
  tarea.appendChild(iconoBorrar(id));

  // Retorna la tarea.
  return tarea;
};
