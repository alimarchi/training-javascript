let character = "Black Widow";
switch (character) {
  case "Captain America":
    power = "Indestructible shield";
    break;
  case "Black Widow":
    power = "Master spy & assassin";
    break;
  case "Iron Man":
    power = "Genius-level intellect";
    break;
  case "Thor":
    power = "The hammer of Thor";
    break;
  default:
    console.log("Choose your hero");
    break;
}
console.log(power);

// Escribe un programa que pide al usuario seleccionar un lenguaje entre en, de, pt y po.

let answer;
let language = prompt("Please choose a language");
switch (language) {
  case "en":
    answer = "Language is English, execute code for English";
    break;
  case "de":
    answer = "Language is German, execute code for German";
    break;
  case "pt":
    answer = "Language is Portuguese, execute code for Portuguese";
    break;
  case "po":
    answer = "Language is Polish, execute code for Polish";
    break;
  default:
    answer = "Language not chosen, using Spanish";
    break;
}
console.log(answer); 

let result;
let number = 25;
switch (true) {
  case number < 0:
    result = "El número es menor que 0";
    break;
  case number >= 0 && number <= 10:
    result = "El número está entre 0 y 10";
    break;
  case number >= 11 && number <= 20:
    result = "El número está entre 11 y 20";
    break;
  case number > 20:
    result = "El número es mayor que 20";
    break;
  default:
    result = "No es un número";
    break;
} 

console.log(result);
