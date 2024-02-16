function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:
  let combinado = nombre+" "+apellido
  return(combinado)
}
combinarNombres("Soy","Henry")
module.exports = combinarNombres;
