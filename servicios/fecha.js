export const fechasUnicas = (tareas) => {
  // Creamos una constante para un arreglo
  const unico = [];

  // Recorremos cada una de las tareas y guardamos el valor en el parámetro TAREA
  tareas.forEach((tarea) => {
    // Si la TAREA con el FORMATO-FECHA NO existe en el arreglo ÚNICO
    if (!unico.includes(tarea.formatoFecha)) {
      // Agrega a ÚNICO la TAREA con el FORMATO-FECHA
      unico.push(tarea.formatoFecha);
    }
  });
  return unico;
};

export const ordenarFechas = (fechas) => {
  return fechas.sort((a, b) => {
    const primeraFecha = moment(a, "DD/MM/YYYY");
    const segundaFecha = moment(b, "DD/MM/YYYY");
    return primeraFecha - segundaFecha;
  });
};
