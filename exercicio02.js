/*
50 kl peso maximo
4 reais a cada kilo excedente
verificar se a excesso
se houver gravar na variavel excesso e multa o valor q devera pagar 
*/

let peso = 60.00;
const pesoMax = 50.00;
const multakl = 4.00;
let pesoExc = peso - pesoMax;
multaRes = pesoExc * multakl;

if (peso < 50.00) console.log("peso dentro do limite, multa não aplicada");
else{
  console.log("Peso excedente", pesoExc);
  console.log("multa para pagar", multaRes);
}
