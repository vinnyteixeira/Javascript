/*
dado um array com x numeros, encontrar a media desses numeros
media = (soma dos elementos ) / tamanho
*/
/*
let array = [10,20,30,40,50]

let sum = 0

for(let num of array){
  sum = sum + num
 }
 const media = sum / array.length
console.log(media)
*/
const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99]

let obrigatorio = 0
let facultativo = 0
let naoEleitor = 0

for(let idade of lista){
  if(idade >= 18 && idade <= 69) obrigatorio++
  else if(idade < 16) naoEleitor++
  else facultativo++
}

console.log("Obrigatorio: ",obrigatorio)
console.log("Facultativo: ",facultativo)
console.log("Não eleitor: ",naoEleitor)