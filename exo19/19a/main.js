let integer = [9, 1, 3, 6, 2];

console.log(integer.length);

console.log(integer.pop());

integer.push(4);

for (let i = 0; i < integer.length; i++) {
    integer[i]+=2;
}

integer[3] += 1;

console.log(integer);

let somme = 0;

integer.forEach(element => {
    somme += element;
});

console.log(somme);

integer.sort();

console.log(integer);