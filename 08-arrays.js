const variavel = 10
let array = [true,true,false,0,1,2,"string aqui","sejadev"]

//console.log(array)

array.pop() //remove o ultimo elemento do array
array.push(100,"string")//adiciona elementos no array

let newArray = [10,20,30]
let i = 0
while (i < newArray.length){
 //console.log(i)
  //console.log(newArray[i])
  i++
}

for (let pos = 0; pos < newArray.length;pos++){
  //console.log(newArray[pos])
}

//for..in 
for (let pos in newArray){
 // console.log(pos)
  //console.log(newArray[pos])
}
//for..of

for(let arr of newArray){
 // console.log(arr)
}

