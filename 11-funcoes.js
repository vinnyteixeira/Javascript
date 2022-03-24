function soma (A , B) {
  return A + B
}

function subtracao (A,B){
  return A - B
}

function calculadora (tipo) {
  const A = 1
  const B = 2
  if (tipo === "soma") return soma(A,B)
  else if (tipo === "subtracao") return subtracao(A,B)
}

const resultado = calculadora("subtracao")
console.log(resultado)

/*
 faca uma funcao que verifica se o numero e par ou nao
*/

function par (numeros){
  return numeros % 2 === 0
  
}
function verifica (tipo){
  const numeros = 2
  if (tipo === "par") return par (numeros)

}
//const num = verifica("par")
//console.log(num)

for (let i = 0; i <= 100; i++){
  if (par(i))console.log(i)
}
