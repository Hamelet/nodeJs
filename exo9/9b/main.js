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
 if (number >= 0 && number <= 10) {
     console.log("Le numero est compris entre 0 et 10")
 } else 
        if (number >= 11 && number <= 100) {
            console.log("Le numero est compris entre 11 et 100")
        } 
 else{
     console.log("le nombre saisi a une autre valeur")
 }

  rl.close();
});