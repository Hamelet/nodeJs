let maMap = new Map();

maMap.set(1, {nom: "Damien", age: 29});
maMap.set(2, {nom: "Laurent", age: 51});

maMap.get(2).age += 2;
console.log(maMap);