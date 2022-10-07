const currentMonth = new Date().getMonth() + 1;
console.log(currentMonth);

if (currentMonth < 3 || currentMonth == 12) {
  console.log("Winter");
} else if (currentMonth > 2 && currentMonth < 6) {
  console.log("Spring");
} else if (currentMonth > 5 && currentMonth < 9) {
  console.log("Summer");
} else if (currentMonth > 8 && currentMonth < 12) {
  console.log("Autumn");
} else {
  console.log("Please, enter a valid month");
} 

// Obtener la fecha completa para el día en curso
const fechadeHoy = new Date();
// el año con 4 dígitos
let year = fechadeHoy.getFullYear();
//El día del mes en curso (entre 1 y 31)
let today = fechadeHoy.getDate();
// El mes de 0 a 11 (0-Enero 11-Diciembre)
let month = fechadeHoy.getMonth();
// el día de la semana (0 para el domingo, 6 para el sabado)
let dayOfWeek = fechadeHoy.getDay();
// la hora entre 0 y 23
let hour = fechadeHoy.getHours();
// Los minutos, entre 0 y 59
let minutes = fechadeHoy.getMinutes();
// Mostrar por consola la hora y los minutos
console.log(hour, ":", minutes);

let day = today;
// Si el día tiene menos de 2 digitos
if (day < 10) {
  day = "0" + day;
}

console.log(day);

month = month + 1;
if(month < 10){
    month = "0"+month;    
}
console.log(month);
console.log(year);

let fullDate = hour+":"+minutes+" "+day+"/"+month+"/"+year;

console.log("Today's date and time:");
console.log(fullDate)