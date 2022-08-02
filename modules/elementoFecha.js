// Exportaremos por defecto la función
export default (fecha) => {
  // Creamos un elemento LI que va a estar directamente en la lista.
  const elementoFecha = document.createElement("li");
  // Agregamos una clase al ELEMENTO-FECHA
  elementoFecha.classList.add('fecha');
  // Escribimos en el ELEMENTO-FECHA la FECHA.
  elementoFecha.innerHTML = fecha;
  // Retornamos toda la estructura que se creo.
  return elementoFecha;
}