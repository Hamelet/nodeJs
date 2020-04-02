function factorielle(n) {
    if (n == 1) {
        return 1;
    }
    return factorielle(n - 1) * n;
}
let variable = factorielle(3);
console.log(variable);