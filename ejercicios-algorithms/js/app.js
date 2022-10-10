// Ejercicio 1 - Escribe un programa que indique cuantos días tiene el mes en curso, obteniendo el mes real del sistema

/* let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

console.log(new Date(year, month, 0).getDate());

switch (month) {
  case 1:
    answer = "31 days";
    break;
  case 2:
    answer = "28 days";
    break;
  case 3:
    answer = "31 days";
    break;
  case 4:
    answer = "30 days";
    break;
  case 5:
    answer = "31 days";
    break;
  case 6:
    answer = "30 days";
    break;
  case 7:
    answer = "31 days";
    break;
  case 8:
    answer = "31 days";
    break;
  case 9:
    answer = "30 days";
    break;
  case 10:
    answer = "31 days";
    break;
  case 11:
    answer = "30 days";
    break;
  case 12:
    answer = "31 days";
    break;
  default:
    answer = "Please insert a valid month";
}
console.log(answer); */

// Ejercicio 2 - Escribe un programa que indique en la consola cuantos días tiene el mes en curso, obteniendo el mes real del sistema

/* let currentMonth = prompt("Please choose a month");

switch (currentMonth) {
  case "January":
    reply = `${currentMonth} has 31 days`;
    break;
  case "February":
    reply = `${currentMonth} has 28 days`;
    break;
  case "March":
    reply = `${currentMonth} has 31 days`;
    break;
  case "April":
    reply = `${currentMonth} has 30 days`;
    break;
  case "May":
    reply = `${currentMonth} has 31 days`;
    break;
  case "June":
    reply = `${currentMonth} has 30 days`;
    break;
  case "July":
    reply = `${currentMonth} has 31 days`;
    break;
  case "August":
    reply = `${currentMonth} has 31 days`;
    break;
  case "Septemebr":
    reply = `${currentMonth} has 30 days`;
    break;
  case "October":
    reply = `${currentMonth} has 31 days`;
    break;
  case "November":
    reply = `${currentMonth} has 30 days`;
    break;
  case "December":
    reply = `${currentMonth} has 31 days`;
    break;
  default:
    reply = "That's not a real month!";
    break;
}

alert(reply); */

// Ejercicio 3 - Escribe un programa que pregunte la temperatura exterior al usuario.

/* let temperature = prompt("Please, insert the temperature");

switch (true) {
  case temperature < 15:
    alert("Warm up");
    break;
  case temperature >= 15 && temperature <= 25:
    alert("Enjoy the weather");
    break;
  case temperature > 25:
    alert("Cool down");
    break;
  default:
    alert("Not a valid temperature.");
    break;
}  */

// Ejercicio 4 - Escribe un programa que simula un semáforo

/* let isGreen = true;

if (isGreen == true) {
    console.log("Cross the road");
}
else {
    console.log("Please wait");
} */

// Ejercicio 5 - Escribe un programa que convierta las temperaturas a Fahrenheit

/* let absoluteZero = (273.15 * 9) / 5 + 32;
let freezingPoint = (0 * 9) / 5 + 32;
let bodyTemperature = (37 * 9) / 5 + 32;
let bolingPoint = (100 * 9) / 5 + 32;

let temperature = "absoluteZero";

switch (temperature) {
  case "absoluteZero":
    console.log(`Absolute Zero: ${absoluteZero} °F`);

  case "freezingPoint":
    console.log(`Freezing Point: ${freezingPoint} °F`);

  case "bodyTemperature":
    console.log(`Body Temperature: ${bodyTemperature} °F`);

  case "bolingPoint":
    console.log(`Boiling Point: ${bolingPoint} °F`);
    break;
  default:
    console.log("Invalid temperature.");
} */

// Ejercicio 6 - Escribe un programa que pida al usuario email y contraseña

/* let email = "tolkien@lordofrings.com";
let password = "aNBR6ZeWPY";

let user_email = prompt("Please enter your email");
let user_password = prompt("Please enter your password");

if (email === user_email && password === user_password) {
  alert("Welcome Mr. Tolkien");
} else {
  alert("Wrong password or email")
} */

// Ejercicio 7 - Mediante una estructura switch escribe un programa para convertir euros

/* let euro = prompt("How many euros do you want to convert?");

let dolar = euro * 0.97;
let yen = euro * 141.59;
let libra = euro * 0.88;
let franco = euro * 0.97;

let convert_to = "dolar";

switch (convert_to) {
  case "dolar":
    console.log(`${euro} euros equivalen a ${dolar} dólares americanos`);
  case "dolar":
    console.log(`${euro} euros equivalen a ${yen} yen japoneses`);
  case "dolar":
    console.log(`${euro} euros equivalen a ${libra} libras esterlinas`);
  case "dolar":
    console.log(`${euro} euros equivalen a ${franco} francos suizos`);
    break;
  default:
    console.log("Introduzca una moneda valida");
} */

// Ejercicio 8 - Escribe un programa que pregunte al usuario 2 números y la operación a realizar

/* let numberOne = Number(prompt("Please insert a number"));
let numberTwo = Number(prompt("Please insert another number"));

if (isNaN(numberOne) || isNaN(numberTwo)) {
  alert("Please insert valid numbers");
} else {
  let operation = prompt("Choose an operation");
  switch (true) {
    case operation == "sum":
      console.log(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`);
      break;
    case operation == "division":
      console.log(`${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`);
      break;
    case operation == "multiplication":
      console.log(`${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`);
      break;
    case operation == "subtraction":
      console.log(`${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`);
      break;
    default:
      console.log("Not a valid operation");
      break;
  }
} */

// Ejercicio 9 - Pregunta al usuario DNI o NIE y comprobar mediante funciones para strings si los datos introducidos son válidos

/* let IDnumber = prompt("Please insert your DNI or NIE");

if (IDnumber.charCodeAt(0) >= 48 && IDnumber.charCodeAt(0) <= 57) {
  if (
    IDnumber.length == 9 &&
    IDnumber.toUpperCase().charCodeAt(8) >= 65 &&
    IDnumber.toUpperCase().charCodeAt(8) <= 90 &&
    !isNaN(IDnumber.substring(1, 7))
  ) {
    console.log(`Your DNI ${IDnumber} is valid`);
  } else {
    console.log(`Your DNI ${IDnumber} is not valid`);
  }
} else if (
  IDnumber.toUpperCase().charCodeAt(0) == 84 ||
  IDnumber.toUpperCase().charCodeAt(0) == 88
) {
  if (
    IDnumber.length == 9 &&
    IDnumber.toUpperCase().charCodeAt(8) >= 65 &&
    IDnumber.toUpperCase().charCodeAt(8) <= 90 &&
    !isNaN(IDnumber.substring(1, 7))
  ) {
    console.log(`Your NIE ${IDnumber} is valid`);
  } else {
    console.log(`Your NIE ${IDnumber} is not valid`);
  }
} else {
  console.log("Your ID number is not valid");
} */

// Ejercicio 10 - Genera 2 números aleatorios para simular un juego de dados y muestra por consola el ganador

/* let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(`Player 1: ${randomNumber1}`);
console.log(`Player 2: ${randomNumber2}`);

switch (true) {
  case randomNumber1 > randomNumber2:
    console.log("Player 1 wins!");
    break;
  case randomNumber2 > randomNumber1:
    console.log("Player 2 wins!");
    break;
  case randomNumber1 == randomNumber2:
    console.log("draw!");
    break;
  default:
    console.log("Please, try again.");
    break;
}
 */
