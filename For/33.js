const A = parseInt(prompt());
let C = 0, F1 = 1, F2 = 1;

for (let t = 3; t <= A; t++) {
   F=F1+F2;
    console.log("F" + t + " = " + F);
    F1 = F2;
    F2 = F;
}