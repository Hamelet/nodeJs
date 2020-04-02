console.log("//==== Ex 1c ====//");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Saisissez un nombre entier: ', (number) => {
  console.log('Vous avez saisi: ', number);
  const integer = parseInt(number, 10);

  // Vos instructions ici
  console.log(number % 2 )

  rl.close();
});