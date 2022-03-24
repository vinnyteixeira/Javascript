function Pessoa (nome, sobrenome) {
  let pessoa = {
    nome,
    sobrenome
  }

  pessoa.nomeCompleto = `${nome} ${sobrenome}`
  return pessoa
}

const pessoaA = Pessoa("Vinicius","Teixeira")
const pessoaB = Pessoa("Vinicius","Rocha")

console.log(pessoaA,pessoaB)
console.log(pessoaA.nomeCompleto)