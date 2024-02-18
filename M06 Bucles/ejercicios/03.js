function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  let c = x > y
  let d = x < y
  if (c === true) 
    return(x)
  else if(d === true)
    return(y)
  else if (x === y)
  return(x)
}
obtenerMayor(2,3)
module.exports = obtenerMayor;
