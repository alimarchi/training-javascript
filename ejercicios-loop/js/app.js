// counting by one to one

/* let count = 0;
while (count < 10) {
  console.log(count);
  count++;
} */

// counting 2 by 2

/* let number = 0;
while (number < 10) {
  console.log(number);
  number += 2;
} */

// cuenta atras 

/* let counter = 10;
let timer = setInterval(() => {
  console.log(counter);
  counter--;
  if (counter < 0) {
    clearInterval(timer);
  }
}, 1000); */

/* let limit = 10;
for (let counter=0; counter<=limit; counter++){
  console.log(counter)
}
 */

/* let number = 10;
while (number >= 0) {
  number--;
  console.log(number);
} */

let number = 2;
let multi = 1;
while (multi <= 10) {
  //console.log(`${number} x ${multi} = ${number * multi}`);
  console.log(number, " x ", multi, "=", number * multi);
  multi++
}
