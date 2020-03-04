



/*
function shuffle(array) {

  let lengthIndex = array.length, temporaryValue, randomElement;

  while (0 !== lengthIndex) {

    randomElement = Math.floor(Math.random() * lengthIndex);
    lengthIndex -= 1;

    temporaryValue = array[lengthIndex];
    array[lengthIndex] = array[randomElement];
    array[randomElement] = temporaryValue;
  };

  return array;
}

*/
/*
function numerosMasFrecuentes(array) {
  let contenedor = []
  let index = 0
  proceso(array)

  function proceso(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        const SEREPITE = array[i] === array[j]
        if (SEREPITE) {
          empaquetalos(array[i], cuentamelos(array[i], array))
          return proceso(filtraElArray(array[i], array))
        }
      }
    }
    return contenedor
  }
  function cuentamelos(numero, array) {
    let contador = 0
    for (let i = 0; i < array.length; i++) {
      if (numero === array[i]) {
        contador++
      }
    }
    return contador
  }
  function filtraElArray(numero, array) {
    let arrayFiltrado = []
    let index = 0
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== numero) {
        arrayFiltrado[index] = array[i]
        index++
      }
    }
    return arrayFiltrado
  }
  function empaquetalos(numero, contador) {
    let paquete = [numero, contador]
    contenedor[index] = paquete
    index++
  }
  return contenedor
}

let numeros = [0, 4, 7, 4, 7, 3, 4, 12, 30, 22, 22, 22, 22]
console.log(numerosMasFrecuentes(numeros))
 //array = array.filter(items =>items === array[i])

async function call(){
  const lulz = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${94}`).then(response => response.json())

  console.log(lulz)
}
call()

*/


/*
function archivarNotas() {

  let salir = false
  const notaParciales = []

  while (salir === false) {
    const numero = prompt('ingresa un número')
    console.log(numero)
    if(numero === null) {
      return notaParciales
    }
    
    if (numero > 0 && numero <=10) {
      notaParciales.push(parseInt(numero))   
    } else {
      alert("la nota maxima es 10, trate de nuevo")
    } 
    salir = !confirm('desea ingresar mas numeros')
  }
  return notaParciales
}

let notasParciales = archivarNotas() 
console.log(notasParciales)

function numberToString(n) {
  return n.toString()
}
function intReduceMagnitude(n) {
  return n % 10
}
*/

const myArray = [1, 1, 5, 7, 8]
/*
let myVar = myArray.forEach(

  (element, index) => { return element * index }
)
*/
/*

let data = [
  {
      country: 'China',
      pop: 1409517397,
  },
  {
      country: 'India',
      pop: 1339180127,
  },
  {
      country: 'USA',
      pop: 324459463,
  },
  {
      country: 'Indonesia',
      pop: 263991379,
  }
]
let mySum = 0
data.map(element => Object.entries(element)[1][1]).filter(element => element < 1409517397).forEach(element => mySum += element)

let sum = data.reduce((acc, val) => {
  return val.country == 'China' ? acc : acc + val.pop;
}, 0);


console.log(mySum)
console.log(sum)
*/

/*
const myString = prompt('dime tu numero')


let myAcumulador = 0
for (let i = 0; i < myString.length; i++) {
  myAcumulador += Number(myString[i]);
}
*/
//const mySum = prompt('dime tu numero').split('').reduce((suma, valor) => Number(suma) + Number(valor))

