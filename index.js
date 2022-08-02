/**
 * ? Importaremos el resto de las funciones necesarios para el correcto funcionamiento del código.
 */

import { agregarTarea } from "./modules/agregarTarea.js";
// Es importada en este archivo ya que para que los datos se muestren debe ser al
// cargar el archivo principal.
import { desplegarTareas } from "./modules/leerTareas.js";

/**
 * ? Accediendo al botón mediante el "data-attribute".
 * ! Lo guardaremos en una constante ya que su valor no va a cambiar.
 * * Para evitar que el usuario acceda a las variables declaradas, usaremos.
 * * el (IIFE) que significa: immediately invoked function expression.
 */

/**
 * ! Inicializamos el (IIFE).
 */

  //Inicio IIFE
  const bntAgregar = document.querySelector("[data-form-btn]");

  /**
   * ! Evento para el botón de agregar tarea.
   */
  bntAgregar.addEventListener("click", agregarTarea);

  desplegarTareas();
 // FIN IIFE.

// Directamente desde una función anónima.

/* bntAgregar.addEventListener('click', (e) => {
  e.preventDefault();
  const input = document.querySelector('[data-form-input]');
  console.log(input.value);
}); */
