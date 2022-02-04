const A = parseInt(prompt("Какова ширину прямоугольника!"));
const B = parseInt(prompt("Какова длина прямоугольника!"));
const C = parseInt(prompt("Какова сторона квадрата!"));

const sKvadrata = (C*C);
const S_pramougolnika = (A*B);

const a = Math.floor(S_pramougolnika/sKvadrata);
const b = (S_pramougolnika%sKvadrata);
console.log("Количество размещенных квадратов"+a);
console.log("Площадь не занятой части"+b);
