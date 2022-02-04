const A = parseInt(prompt());

let a = parseInt(A % 10);

let b = parseInt((A - a) % 100)/10;

let c = parseInt((A - (a+b))/100);

console.log("сумма = " + (a+b+c));
console.log("произведение = " + (a*b*c));
