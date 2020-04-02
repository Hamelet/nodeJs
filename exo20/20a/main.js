let monSet = new Set(["Javascript", "Java", "Nodes.js"]);

console.log(monSet.size);

monSet.add("Javascript");

console.log(monSet);

let monSetArray = Array.from(monSet);

console.log(monSetArray);