const A = parseInt(prompt());
let C = 0, A1 = 1, A2 = 2, A3 = 3;

for (let t = 4; t <= A; t++) {
    C = (A3 +A2 - (2*A1));
    console.log("A" + t + " = " + C);
    A1 = A2;
    A2 = A3;
    A3 = C;
}