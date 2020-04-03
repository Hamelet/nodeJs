function pouet(params1, params2, params3) {
    params1 += 5;
    params2.age += 5;
    params3 = {nom: "Damien"};
}
let variable1 = 0;
let variable2 = {age:12};
let variable3 = {nom: "Norbert"};

pouet(variable1, variable2, variable3);

console.log(variable1);
console.log(variable2);
console.log(variable3);
