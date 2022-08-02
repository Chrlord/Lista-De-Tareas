import { crearTarea } from "./agregarTarea.js";
// Importamos el modulo ELEMENTO-FECHA
import elementoFecha from "./elementoFecha.js";
// Importamos el modulo FECHA.
import { fechasUnicas, ordenarFechas } from "../servicios/fecha.js";

// Función para leer las tareas del LOCAL-STORAGE.
export const desplegarTareas = () => { 
  // Seleccionamos el elemento UL
  const lista = document.querySelector("[data-lista]");

  // Tomamos a información que ya esta en el LOCAL-STORAGE
  const listaTareas = JSON.parse(localStorage.getItem("tareas")) || [];

  // Creamos la variable FECHAS que contendrá las FECHAS-ÚNICAS de la LISTA-TAREAS.
  const fechas = fechasUnicas(listaTareas);

  // Modificamos directamente el arreglo FECHAS
  ordenarFechas(fechas);
  
  // Recorremos cada una de las fechas que contiene el arreglo.
  fechas.forEach((fecha) => {
    // Usaremos la libreria MOMENT
    const fechaMoment = moment(fecha, "DD/MM/YYYY");

    lista.appendChild(elementoFecha(fecha));
    // Recorremos el arreglo
    listaTareas.forEach((tarea) => {
      // 
      const fechaTarea = moment(tarea.formatoFecha, "DD/MM/YYYY");

      // Vamos a usar una función de la librería MOMENT para diferenciar las fechas.
      const diff = fechaMoment.diff(fechaTarea);

      // Condicional para diferenciar las fechas, si es idéntico a 0
      if (diff === 0) {
        // Agrupa las tareas con la misma fecha.
        lista.appendChild(crearTarea(tarea));
      }
    });
  });
};
