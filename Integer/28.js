const A = parseInt(prompt("Ведите день года!"));
const B = parseInt(prompt("С какого дня недели начался этот год"));


let a = Math.floor((A+B)/7);
console.log(a);