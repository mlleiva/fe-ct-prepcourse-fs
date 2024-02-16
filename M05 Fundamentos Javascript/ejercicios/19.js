function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
let num1 = Math.sign(num)
  
  if (num1 > 0) 
  return("Es positivo")
 else if (num1 < 0) 
  return("Es negativo")
else if(num1 === 0)
  return(false)

}
esPositivo(20)
module.exports = esPositivo;