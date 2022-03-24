const array = [1,2,3,4,5,6,7,8,9,10,11,12]

// forEach: passa por todos os elementos do array
array.forEach( (elemento,posicao) => {
 // console.log(`${elemento} - posicao ${posicao}`)
} )

// find: retorna o elemento

const valor = array.find((elemento)=>{
  return elemento === 10
})

//console.log(valor)


//findIndex: retorna a posição do elemento
const index = array.findIndex(elemento => elemento === 10)

//console.log(index)

//some: retorna se um numero satisfazer a condição
const some = array.some((elemento)=>{
    if (elemento >= 5) return true

    return false
})
//console.log(some)

//every: retorna true se todos os numeros respeitarem a condição
const every = array.every((elemento)=>{
  if (elemento >= 1) return true

  return false
})
//console.log(every)

const newArray = [1,2,3,4,5]

//splice: corta o array, o primeiro parametro e o inicio e o segundo a quantidade
//console.log(newArray.splice(2,2))

// map: alterar os valores dentro do array seguindo uma regra
//console.log(newArray.map ((elemento) => {
  //return elemento * 2
//}))

//filter: filtra os elementos dentro do array

console.log(newArray.filter((elemento)=>{
  return elemento % 2 === 0
}))

//reduce: reduz o array pra algum outro elemento
//console.log(newArray.reduce((acumulado, elemento)=>{
  //return acumulado + elemento
//}, 0))