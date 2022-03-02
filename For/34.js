const A = parseInt(prompt());
let C = 0, A1 = 1, A2 = 2;

for (let t = 3; t <= A; t++) {
    C = (A1 + (2 * A2)) / 3;
    console.log("A" + t + " = " + C);
    A1 = A2;
    A2 = C;
}