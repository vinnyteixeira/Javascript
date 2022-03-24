const pessoa = {
  nome: "vinicius",
  sobrenome: "teixeira",
  idade: 20
}

const {nome,idade} = pessoa

console.log(nome)
console.log(idade)

const pessoaComDadosAtualizados = {
  ...pessoa,
  idade:21
}

console.log(pessoaComDadosAtualizados)

/*
const array = [1,2,3,4]

const [a,b] = array

console.log(a)
console.log(b)

*/

