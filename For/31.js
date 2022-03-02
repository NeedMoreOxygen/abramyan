const A = parseInt(prompt());
let C = A;

for (let t = 0; t <= A; t++) {
    C = (1 / C) + 2;
    console.log("A" + t + " = " + C);
}