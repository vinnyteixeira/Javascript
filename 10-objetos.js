const num = 10

const pessoa = {
  nome: "Vinicius",
  idade: 20,
  casado: false,
  notas:[5,10,5],
  endereco: {
    rua: "rua x",
    numero: 100,
    cidade: "sp "
  }
}

console.log(pessoa["nome"])
console.log(pessoa.nome)
console.log(pessoa["idade"])
console.log(pessoa.idade)
console.log(pessoa["casado"])
console.log(pessoa.casado)
console.log(pessoa["notas"][2])
console.log(pessoa.notas[2])
console.log(pessoa["endereco"]["rua"])
console.log(pessoa.endereco.rua)

const array = [pessoa,pessoa]
console.log(array)