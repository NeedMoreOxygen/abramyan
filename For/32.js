const A = parseInt(prompt());
let C = 1;
console.log("A0 = " + C);
for (let t = 1; t <= A; t++) {
    C = (C+1) / t;
    console.log("A" + t + " = " + C);
}