function fatorial (n) {
    if (n <= 2) return n
    return fatorial (n - 1) * n
}

const numero = 4
const resposta = fatorial(numero)

console.log(resposta)