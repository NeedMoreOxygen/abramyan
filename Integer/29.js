const A = parseInt(prompt("Какова ширину прямоугольника!"));
const B = parseInt(prompt("Какова длина прямоугольника!"));
const C = parseInt(prompt("Какова сторона квадрата!"));

let S_kvadrata = (C*C);
let S_pramougolnika = (A*B);

let a = Math.floor(S_pramougolnika/S_kvadrata);
let b = (S_pramougolnika%S_kvadrata);
console.log("Количество размещенных квадратов"+a);
console.log("Площадь не занятой части"+b);