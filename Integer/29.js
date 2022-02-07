const A = parseInt(prompt("Какова ширину прямоугольника!"));
const B = parseInt(prompt("Какова длина прямоугольника!"));
const C = parseInt(prompt("Какова сторона квадрата!"));

<<<<<<< HEAD
let S_kvadrata = (C * C);
let S_pramougolnika = (A * B);

let a = Math.floor(S_pramougolnika / S_kvadrata);
let b = (S_pramougolnika % S_kvadrata);
console.log("Количество размещенных квадратов = " + a);
console.log("Площадь не занятой части = " + b);
=======
const sKvadrata = (C*C);
const S_pramougolnika = (A*B);

const a = Math.floor(S_pramougolnika/sKvadrata);
const b = (S_pramougolnika%sKvadrata);
console.log("Количество размещенных квадратов"+a);
console.log("Площадь не занятой части"+b);
>>>>>>> 42d76411d6be874cf4f8ea9fc7a39dee57a26c4c
