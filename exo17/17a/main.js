function factorielle(n) {
    return factorielle(n - 1) * n;
}
let variable = factorielle(3);
console.log(variable);
//genere une erreur