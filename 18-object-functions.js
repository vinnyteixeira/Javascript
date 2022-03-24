const person = {
  name: "vinicius",
  lastname: "teixeira"
}

//objects.keys(): cria um array com todas as chaves do objeto

//console.log(Object.keys(person))

//objects.values(): cria um array com todos os valores do objeto
//console.log(Object.values(person))

//object.entries() : cria um array com um array de objetos e valores
//console.log(Object.entries(person))

const livros = {
  'livro a': 19.90,
  'livro b': 97.00,
  'livro c': 20.00,
}

const values = Object.values(livros)
const sum = values.reduce((val,acc)=>{
  return val + acc
},0)

console.log(sum)