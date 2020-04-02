console.log("//==== Ex 1c ====//");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Saisissez un nombre entier: ', (number) => {
  console.log('Vous avez saisi: ', number);
  let integer = parseInt(number, 10);

  // Vos instructions ici
switch (integer) {
    case 1:
        integer += 3;
        console.log(integer);
        break;
    case 2:
        integer *= 3;
        console.log(integer);
        break;
    default:
        integer -= 2;
        console.log(integer);
        break;
}


  rl.close();
});