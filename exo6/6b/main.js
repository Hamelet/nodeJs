let variable1 = {
    prenom: "gandalf"
}
let variable2 = {
    prenom: "gandalf"
}
let variable3 = variable1;

console.log(variable1 === variable2);
console.log(variable1 === variable3);
console.log(variable3 === variable2);
