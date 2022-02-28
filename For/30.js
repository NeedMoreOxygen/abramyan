let N = parseInt(prompt());

const A = parseInt(prompt());
const B = parseInt(prompt());

let J = (A - B)/ N;

J = J / N;

console.log(J);

console.log(A);

for (let i = 1; i<=N;i++){
    console.log("Отрезок  " + i + " = ");
    console.log(1- Math.sin( A + (i*J)));
}


