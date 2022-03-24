function fatorial (n){
  let i = n
  let fatorial = 1
  while (i >= 2){
      fatorial  = fatorial * i
      i--
  }
  return fatorial
}

const number = 3
const resposta = fatorial(number)
console.log(resposta)

